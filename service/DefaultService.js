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
                    'href':`${url}/${row.name}`.replaceAll('//','/'),
                    'method':'GET',
                }
            })
            resolve(rows)
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
                a.name='${name}'
        `
        db.all(sql_req, (err, rows) => {
            if(err){
                reject({'ERROR':err})
                return
            } else if (!rows.length) {
                reject({'ERROR':'404, nothing found'})
                return
            } 
            rows[0]['links'] = [
                { 'href':`${url}/decades`.replaceAll('//','/'), 'method':'GET'},
                { 'href':`${url}/pieces`.replaceAll('//','/'), 'method':'GET'},
                { 'href':`${url}/editions`.replaceAll('//','/'), 'method':'GET'},
            ]
            resolve(rows[0]);
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
                a.name='${name}'
            ORDER BY d.range`
        db.all(sql_req, (err, rows) => {
            if(err){
                reject({'ERROR':err})
                return
            } else if (!rows.length) {
                reject({'ERROR':'404, nothing found'})
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.range}`.replaceAll('//','/'),
                    'method':'GET',
                }
            })
            resolve(rows);
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
                a.name='${name}' AND
                d.range='${decade}' AND
                d.id = l.decade AND
                a.id = l.author AND
                g.id = l.genre
            ORDER BY g.name`
        db.all(sql_req, (err, rows) => {
            if(err){
                reject({'ERROR':err})
                return
            } else if (!rows.length) {
                reject({'ERROR':'404, nothing found'})
                return
            }
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.name}`.replaceAll('//','/'),
                    'method':'GET',
                }
            })
            let content = {
                'decade': decade,
                'genres': rows
            }
            resolve(content);
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
                a.name='${name}' AND
                d.range='${decade}' AND
                g.name='${genre}' AND
                d.id = l.decade AND
                a.id = l.author AND
                g.id = l.genre AND
                p.id = l.piece
            ORDER BY p.title`
        db.all(sql_req, (err, rows) => {
            if(err){
                reject({'ERROR':err})
                return
            } else if (!rows.length) {
                reject({'ERROR':'404, nothing found'})
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.title}`.replaceAll('//','/').replaceAll(' ','%20'),
                    'method':'GET',
                }
            })
            resolve(rows);
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
                a.name='${name}' AND
                d.range='${decade}' AND
                g.name='${genre}' AND
                p.title='${piece}' AND
                d.id = l.decade AND
                a.id = l.author AND
                g.id = l.genre AND
                p.id = l.piece AND
                e.id = l.edition
            ORDER BY p.title`
        db.all(sql_req, (err, rows) => {
            if(err){
                reject({'ERROR':err})
                return
            } else if (!rows.length) {
                reject({'ERROR':'404, nothing found'})
                return
            } 
            rows.forEach(row => {
                row['link'] = {
                    'href':`${url}/${row.isbn}`.replaceAll('//','/'),
                    'method':'GET',
                }
            })
            let content = {
                'title': piece,
                'editions': rows
            }
            resolve(content);
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
                e.isbn='${isbn}'
            ORDER BY e.title`
        db.all(sql_req, (err, rows) => {
            if(err){
                reject({'ERROR':err})
                return
            } else if (!rows.length) {
                reject({'ERROR':'404, nothing found'})
                return
            } 
            resolve(rows[0]);
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
                a.name='${name}' AND
                a.id = l.author AND
                d.id = l.decade AND
                g.id = l.genre AND
                p.id = l.piece
            ORDER BY p.title`
        db.all(sql_req, (err, rows) => {
            if(err){
                resolve({'error':err})
                return
            } 
            rows.forEach(row => {
                let urlArr = url.split('/')
                urlArr.pop()
                let newUrl = urlArr.join('/')
                row['links'] = {
                'href':`${newUrl}/decades/${row.range}/${row.name}/${row.title}`.replaceAll('//','/').replaceAll(' ','%20'),
                'method':'get'
                }
                delete row['range']
                delete row['name']
            })
            resolve(rows);
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
                a.name='${name}' AND
                a.id = l.author AND
                e.id = l.edition
            ORDER BY e.title`
        db.all(sql_req, (err, rows) => {
            if(err){
                resolve({'error':err})
                return
            } 
            rows.forEach(row => {
                row['link'] = {
                    'href':`${url}/${row.isbn}`.replaceAll('//','/'),
                    'method':'GET',
                }
            })
            resolve(rows);
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
                a.name='${name}' AND
                e.isbn='${isbn}' AND
                a.id = l.author AND
                e.id = l.edition
            ORDER BY e.title`
        db.all(sql_req, (err, rows) => {
            if(err){
                resolve({'error':err})
                return
            } 
            resolve(rows[0]);
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
                    'href':`${url}/${row.name}`.replaceAll('//','/').replaceAll(' ', '%20'),
                    'method':'GET',
                }
            })
            resolve(rows)
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
            WHERE e.name='${name}'`
        db.all(sql_req, (err, rows) => {
            if(err){
                reject({'ERROR':err})
                return
            } else if (!rows.length) {
                reject({'ERROR':'404, nothing found'})
                return
            } 
            rows[0]['links'] = [
                { 'href':`${url}/collections`.replaceAll('//','/'), 'method':'GET'},
                { 'href':`${url}/editions`.replaceAll('//','/'), 'method':'GET'},
            ]
            resolve(rows[0]);
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
                e.name='${name}' AND
                e.id = l.editor AND
                c.id = l.collection
            ORDER BY c.name`
        db.all(sql_req, (err, rows) => {
            if(err){
                reject({'ERROR':err})
                return
            } else if (!rows.length) {
                reject({'ERROR':'404, nothing found'})
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.name}`.replaceAll('//','/'),
                    'method':'GET',
                }
            })
            resolve(rows);
        })
    });
}

/**
 * Information about that collection and its edition
 *
 * name String Name of the editor
 * returns inline_response_200_3
 **/
// TODO
exports.editorsNameCollectionsCollectionGET = function(url,db,name,collection) {
}

/**
 * Information about that published piece
 *
 * name String Name of the editor
 * collection String Name of the collection
 * isbn String ISBN of the published book
 * returns edition
 **/
// TODO
exports.editorsNameCollectionsCollectionIsbnGET = function(url,db,name,collection,isbn) {
}

/**
 * List of published pieces by that editor
 *
 * name String Name of the editor
 * returns List
 **/
// TODO
exports.editorsNameEditionsGET = function(url,db,name) {
}

/**
 * Information about that published piece
 *
 * name String Name of the editor
 * isbn String ISBN of the published book
 * returns edition
 **/
// TODO
exports.editorsNameEditionsIsbnGET = function(url,db,name,isbn) {
}

/**
 * Entry points
 *
 * returns links
 **/
exports.rootGET = function(url,db) {
    return new Promise(function(resolve, reject) {
        resolve({'links':
            [
                {'href':'/authors','method':'GET'},
                {'href':'/editors','method':'GET'}
            ]
        });
    });
}

/**
 * Deletes an author
 *
 * no response value expected for this operation
 **/
// TODO
exports.authorsDELETE = function(url,db,) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

/**
 * Add/Update an author
 *
 * body Author  (optional)
 * no response value expected for this operation
 **/
// TODO
exports.authorsPOST = function(url,db,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

/**
 * Add/Overwrite an author
 *
 * body Author  (optional)
 * no response value expected for this operation
 **/
// TODO
exports.authorsPUT = function(url,db,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
