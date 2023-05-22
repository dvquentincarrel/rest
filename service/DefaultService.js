'use strict';

/**
 * List of authors
 *
 * returns List
 **/
exports.authorsGET = function(url,db) {
    return new Promise(function(resolve, reject) {
        let sql_req = `SELECT name, surname, date_of_birth FROM author`
        db.all(sql_req, (err, rows) => {
            rows.forEach(row => {
                row['links'] = {
                    // replaceAll didn't actually replace *all*
                    'href':`${url}/${row.name}`.replace(/\/+/g,'/'),
                    'method':'GET, DELETE',
                }
            })
            resolve([rows,200])
        })
    });
}

/**
 * Informations about an author
 *
 * name String Name of the author
 * returns author
 **/
exports.authorsNameGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT name, surname, date_of_birth
            FROM author a
            WHERE
                a.name = ?`
        db.all(sql_req, [name],(err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            rows[0]['links'] = [
                { 'href':`${url}/decades`.replace(/\/+/g,'/'), 'method':'GET'},
                { 'href':`${url}/pieces`.replace(/\/+/g,'/'), 'method':'GET'},
                { 'href':`${url}/editions`.replace(/\/+/g,'/'), 'method':'GET'},
            ]
            resolve([rows[0],200]);
        })
    });
}

/**
 * Decades in which the author wrote pieces
 *
 * name String Name of the author
 * returns List
 **/
exports.authorsNameDecadesGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT d.range
            FROM decade d, author a, links l
            WHERE
                d.id = l.decade AND
                a.id = l.author AND
                a.name = ?
            ORDER BY d.range`
        db.all(sql_req, [name], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.range}`.replace(/\/+/g,'/'),
                    'method':'GET',
                }
            })
            resolve([rows,200]);
        })
    });
}

/**
 * Information about the decade and genres of works written in this decade
 *
 * name String Name of the author
 * decade String Name of the author
 * returns inline_response_200
 **/
exports.authorsNameDecadesDecadeGET = function(url,db,name,decade) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT g.name
            FROM decade d, author a, links l, genre g
            WHERE
                a.name=? AND
                d.range=? AND
                d.id = l.decade AND
                a.id = l.author AND
                g.id = l.genre
            ORDER BY g.name`
        db.all(sql_req, [name, decade], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            }
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.name}`.replace(/\/+/g,'/'),
                    'method':'GET',
                }
            })
            let content = {
                'decade': decade,
                'genres': rows
            }
            resolve([content,200]);
        })
    });
}

/**
 * Informations about the genre and pieces of that genre
 *
 * name String Name of the author
 * decade String Decade of creation
 * genre String Genre of the piece
 * returns inline_response_200_1
 **/
exports.authorsNameDecadesDecadeGenreGET = function(url,db,name,decade,genre) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT p.title
            FROM 
                decade d,
                author a,
                genre g,
                piece p,
                links l
            WHERE
                a.name=? AND
                d.range=? AND
                g.name=? AND
                d.id = l.decade AND
                a.id = l.author AND
                g.id = l.genre AND
                p.id = l.piece
            ORDER BY p.title`
        db.all(sql_req, [name, decade, genre], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.title}`.replace(/\/+/g,'/').replaceAll(' ','%20'),
                    'method':'GET',
                }
            })
            resolve([rows,200]);
        })
    });
}

/**
 * Information about the piece and its editions
 *
 * name String Name of the author
 * decade String Decade of creation
 * genre String Genre of the piece
 * piece String Name of the piece
 * returns inline_response_200_2
 **/
exports.authorsNameDecadesDecadeGenrePieceGET = function(url,db,name,decade,genre,piece) {
    piece = piece.replaceAll('%20',' ');
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT e.title, e.isbn, e.year
            FROM 
            decade d,
                author a,
                genre g,
                piece p,
                edition e,
                links l
            WHERE
                a.name=? AND
                d.range=? AND
                g.name=? AND
                p.title=? AND
                d.id = l.decade AND
                a.id = l.author AND
                g.id = l.genre AND
                p.id = l.piece AND
                e.id = l.edition
            ORDER BY p.title`
        db.all(sql_req, [name, decade, genre, piece],(err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                resolve([{'title':piece},200]);
                return
            } 
            rows.forEach(row => {
                row['link'] = {
                    'href':`${url}/${row.isbn}`.replace(/\/+/g,'/'),
                    'method':'GET',
                }
            })
            let content = {
                'title': piece,
                'editions': rows
            }
            resolve([content,200]);
        })
    });
}

/**
 * Information about the chosen edition
 *
 * name String Name of the author
 * decade String Decade of creation
 * genre String Genre of the piece
 * piece String Name of the piece
 * isbn String ISBN of the published book
 * returns edition
 **/
exports.authorsNameDecadesDecadeGenrePieceIsbnGET = function(url,db,name,decade,genre,piece,isbn) {
    piece = piece.replaceAll('%20',' ');
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT e.title, e.isbn, e.year
            FROM 
                edition e
            WHERE
                e.isbn=?
            ORDER BY e.title`
        db.all(sql_req, [isbn], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            resolve([rows[0],200]);
        })
    });
}

/**
 * Pieces written by that author
 *
 * name String Name of the author
 * returns List
 **/
exports.authorsNamePiecesGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT p.title, d.range, g.name
            FROM author a, piece p, decade d, genre g, links l
            WHERE
                a.name=? AND
                a.id = l.author AND
                d.id = l.decade AND
                g.id = l.genre AND
                p.id = l.piece
            ORDER BY p.title`
        db.all(sql_req, [name], (err, rows) => {
            if(err){
                resolve([{'error':err},500])
                return
            } 
            rows.forEach(row => {
                let urlArr = url.split('/')
                urlArr.pop()
                let newUrl = urlArr.join('/')
                row['links'] = {
                'href':`${newUrl}/decades/${row.range}/${row.name}/${row.title}`.replace(/\/+/g,'/').replaceAll(' ','%20'),
                'method':'get'
                }
                delete row['range']
                delete row['name']
            })
            resolve([rows,200]);
        })
    });
}

/**
 * Published pieces by the author
 *
 * name String Name of the author
 * returns List
 **/
exports.authorsNameEditionsGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT e.title, e.isbn, e.year
            FROM author a, edition e, links l
            WHERE
                a.name=? AND
                a.id = l.author AND
                e.id = l.edition
            ORDER BY e.title`
        db.all(sql_req, [name], (err, rows) => {
            if(err){
                resolve([{'error':err},500])
                return
            } 
            rows.forEach(row => {
                row['link'] = {
                    'href':`${url}/${row.isbn}`.replace(/\/+/g,'/'),
                    'method':'GET',
                }
            })
            resolve([rows,200]);
        })
    });
}

/**
 * Information about the chosen edition
 *
 * name String Name of the author
 * isbn String ISBN of the published book
 * returns edition
 **/
exports.authorsNameEditionsIsbnGET = function(url,db,name,isbn) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT e.title, e.isbn, e.year
            FROM author a, edition e, links l
            WHERE
                a.name=? AND
                e.isbn=? AND
                a.id = l.author AND
                e.id = l.edition
            ORDER BY e.title`
        db.all(sql_req, [name, isbn], (err, rows) => {
            if(err){
                resolve([{'error':err},500])
                return
            } 
            resolve([rows[0],200]);
        })
    });
}

/**
 * List of editors
 *
 * returns List
 **/
exports.editorsGET = function(url,db) {
    return new Promise(function(resolve, reject) {
        let sql_req = `SELECT name FROM editor`
        db.all(sql_req, (err, rows) => {
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.name}`.replace(/\/+/g,'/').replaceAll(' ', '%20'),
                    'method':'GET',
                }
            })
            resolve([rows,200])
        })
    });
}

/**
 * Information about the editor
 *
 * name String Name of the editor
 * returns editor
 **/
exports.editorsNameGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT name
            FROM editor e
            WHERE e.name=?`
        db.all(sql_req, [name], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            rows[0]['links'] = [
                { 'href':`${url}/collections`.replace(/\/+/g,'/'), 'method':'GET'},
                { 'href':`${url}/editions`.replace(/\/+/g,'/'), 'method':'GET'},
            ]
            resolve([rows[0],200]);
        })
    });
}

/**
 * List of collections by that editor
 *
 * name String Name of the editor
 * returns List
 **/
exports.editorsNameCollectionsGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT c.name
            FROM editor e, collection c, links l
            WHERE
                e.name=? AND
                e.id = l.editor AND
                c.id = l.collection
            ORDER BY c.name`
        db.all(sql_req, [name], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.name}`.replace(/\/+/g,'/'),
                    'method':'GET',
                }
            })
            resolve([rows,200]);
        })
    });
}

/**
 * Information about that collection and its edition
 *
 * name String Name of the editor
 * returns inline_response_200_3
 **/
exports.editorsNameCollectionsCollectionGET = function(url,db,name,collection) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT en.title, en.isbn, en.year
            FROM editor er, edition en, collection c, links l
            WHERE
                er.name=? AND
                c.name=? AND
                er.id = l.editor AND
                c.id = l.collection AND
                en.id = l.edition
            ORDER BY c.name`
        db.all(sql_req, [name, collection], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.isbn}`.replace(/\/+/g,'/'),
                    'method':'GET',
                }
            })
            resolve([rows,200]);
        })
    });
}

/**
 * Information about that published piece
 *
 * name String Name of the editor
 * collection String Name of the collection
 * isbn String ISBN of the published book
 * returns edition
 **/
exports.editorsNameCollectionsCollectionIsbnGET = function(url,db,name,collection,isbn) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT e.title, e.isbn, e.year
            FROM 
                edition e
            WHERE
                e.isbn=?
            ORDER BY e.title`
        db.all(sql_req, [isbn], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            resolve([rows[0],200]);
        })
    });
}

/**
 * List of published pieces by that editor
 *
 * name String Name of the editor
 * returns List
 **/
exports.editorsNameEditionsGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT en.title, en.isbn, en.year
            FROM editor er, edition en, links l
            WHERE
                er.name=? AND
                er.id = l.editor AND
                en.id = l.edition
            ORDER BY en.title`
        db.all(sql_req, [name], (err, rows) => {
            if(err){
                resolve([{'error':err},500])
                return
            } 
            rows.forEach(row => {
                row['link'] = {
                    'href':`${url}/${row.isbn}`.replace(/\/+/g,'/'),
                    'method':'GET',
                }
            })
            resolve([rows,200]);
        })
    });
}

/**
 * Information about that published piece
 *
 * name String Name of the editor
 * isbn String ISBN of the published book
 * returns edition
 **/
exports.editorsNameEditionsIsbnGET = function(url,db,name,isbn) {
    return new Promise(function(resolve, reject) {
        let sql_req = `
            SELECT DISTINCT e.title, e.isbn, e.year
            FROM 
                edition e
            WHERE
                e.isbn=?
            ORDER BY e.title`
        db.all(sql_req, [isbn], (err, rows) => {
            if(err){
                console.log(sql_req, err)
                reject([{'ERROR':err},500])
                return
            } else if (!rows.length) {
                reject([{'ERROR':'404, nothing found'},404])
                return
            } 
            resolve([rows[0],200]);
        })
    });
}

/**
 * Entry points
 *
 * returns links
 **/
exports.rootGET = function(url,db) {
    return new Promise(function(resolve, reject) {
        resolve([{'links':
            [
                {'href':`${url}/authors`.replace(/\/+/g,'/'),'method':'GET, POST, PUT'},
                {'href':`${url}/editors`.replace(/\/+/g,'/'),'method':'GET'}
            ]
        },200]);
    });
}

/**
 * Deletes an author
 *
 * name String Name of the author
 * no response value expected for this operation
 **/
exports.authorsNameDELETE = function(db,name) {
    return new Promise(function(resolve, reject) {
        db.all("SELECT * FROM author WHERE name = ?", [name], (err, rows) => {
            if(err) {
                console.log(err);
                reject([{'ERROR':err},500]);
                return;
            } else if (rows.length) {
                let sql_req = "DELETE FROM author WHERE name = ?";
                db.get(sql_req, [name], (err, rows) => {
                    if(err){
                        console.log(err);
                        reject([{'ERROR':err},500]);
                        return;
                    }
                    resolve([`Deleted ${name}`,200]);
                    return;
                })
            } else {
                reject(['Author not found',404])
            }
        })
    })
}

/**
 * Add/Update an author
 *
 * body Author  (optional)
 * no response value expected for this operation
 **/
exports.authorsPOST = function(db,body) {
    return new Promise(function(resolve, reject) {
        db.all('SELECT * FROM author WHERE name = ?', [body.name], (err, rows) => {
            if(err){
                console.log(err);
                reject([{'ERROR':err},500]);
                return;
            } else if (rows.length) {
                console.log('update')
                let sql_req = "UPDATE author SET surname = ?, date_of_birth = ? WHERE name = ? ";
                let params = [body.surname, body.date_of_birth, body.name];
                db.get(sql_req, params, (err, rows) => {
                    if(err){
                        console.log(err);
                        reject([{'ERROR':err},500]);
                        return;
                    }
                    resolve(['Author updated',200]);
                    return;
                })
            } else {
                console.log('insert')
                let id = Math.floor(Math.random()*10000);
                let sql_req = "INSERT INTO author (id, name, surname, date_of_birth) VALUES (?, ?, ?, ?)";
                let params = [id, body.name, body.surname, body.date_of_birth];
                db.get(sql_req, params, (err, rows) => {
                    if(err){
                        console.log(err);
                        reject([{'ERROR':err},500]);
                        return;
                    }
                    resolve(['Author added',200]);
                    return;
                })
            }
        })
    });
}

/**
 * Add/Overwrite an author
 *
 * body Author  (optional)
 * no response value expected for this operation
 **/
exports.authorsPUT = function(db,body) {
    return new Promise(function(resolve, reject) {
        db.all('SELECT * FROM author WHERE name = ?', [body.name], (err, rows) => {
            console.log(rows)
            if(err){
                console.log(err);
                reject([{'ERROR':err},500]);
                return;
            } else if (rows.length) {
                console.log('update')
                let sql_req = "UPDATE author SET surname = ?, date_of_birth = ? WHERE name = ? ";
                let params = [body.surname, body.date_of_birth, body.name];
                db.get(sql_req, params, (err, rows) => {
                    if(err){
                        console.log(err);
                        reject([{'ERROR':err},500]);
                        return;
                    }
                    resolve(['Author updated',200]);
                    return;
                })
            } else {
                console.log('insert')
                let id = Math.floor(Math.random()*10000);
                let sql_req = "INSERT INTO author (id, name, surname, date_of_birth) VALUES (?, ?, ?, ?)";
                let params = [id, body.name, body.surname, body.date_of_birth];
                db.get(sql_req, params, (err, rows) => {
                    if(err){
                        console.log(err);
                        reject([{'ERROR':err},500]);
                        return;
                    }
                    resolve(['Author added',200]);
                    return;
                })
            }
        })
    });
}
