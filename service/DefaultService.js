'use strict';


/**
 * List of authors
 *
 * returns List
 **/
exports.authorsGET = function(url,db) {
    return new Promise(function(resolve, reject) {
        db.all('SELECT name, surname, date_of_birth FROM author', (err, rows) => {
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.name}`.replace('//','/'),
                    'method':'GET',
                }
            })
            resolve(rows)
        })
    });
}


/**
 * Genres of works written in this decade
 *
 * name String Name of the author
 * decade String Name of the author
 * returns List
 **/
exports.authorsNameDecadesDecadeGET = function(url,db,name,decade) {
    return new Promise(function(resolve, reject) {
        db.all(`
        SELECT g.name
        FROM decade d, author a, author_decade ad, genre g, genre_decade gd
        WHERE
            d.id = ad.decade AND
            a.id = ad.author AND
            a.name='${name}' AND
            d.range='${decade}' AND
            gd.decade=d.id AND
            gd.genre=g.id
            `, (err, rows) => {
            if(err){
                resolve({'ERROR':err})
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.name}`.replace('//','/'),
                    'method':'GET',
                }
            })
            resolve(rows);
        })
    });
}


/**
 * Pieces written of that genre
 *
 * name String Name of the author
 * decade String Decade of creation
 * genre String Genre of the piece
 * returns List
 **/
// TODO
exports.authorsNameDecadesDecadeGenreGET = function(url,db,name,decade,genre) {
    return new Promise(function(resolve, reject) {
        db.all(`
        SELECT g.name
        FROM 
            decade d,
            author a,
            author_decade ad,
            genre g,
            piece p,
            genre_decade gd, 
            piece_genre pg, 
        WHERE
            d.id = ad.decade AND
            a.id = ad.author AND
            a.name='${name}' AND
            d.range='${decade}' AND
            gd.decade=d.id AND
            gd.genre=g.id AND
            pg.genre=g.id AND
            pg.piece=g.id
            `, (err, rows) => {
            if(err){
                resolve({'ERROR':err})
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.name}`.replace('//','/'),
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
 * decade String Decade of creation
 * genre String Genre of the piece
 * piece String Name of the piece
 * isbn String ISBN of the published book
 * returns inline_response_200_1
 **/
// TODO
exports.authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET = function(url,db,name,decade,genre,piece,isbn) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Information about the piece
 *
 * name String Name of the author
 * decade String Decade of creation
 * genre String Genre of the piece
 * piece String Name of the piece
 * returns String
 **/
// TODO
exports.authorsNameDecadesDecadeGenrePieceGET = function(url,db,name,decade,genre,piece) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = "";
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
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
        db.all(`
        SELECT d.range
        FROM decade d, author a, author_decade ad
        WHERE
            d.id = ad.decade AND
            a.id = ad.author AND
            a.name='${name}'
        `, (err, rows) => {
            if(err){
                resolve({'ERROR':err})
                return
            } 
            rows.forEach(row => {
                row['links'] = {
                    'href':`${url}/${row.range}`.replace('//','/'),
                    'method':'GET',
                }
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
// TODO
exports.authorsNameEditionsGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = [ {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
}, {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
} ];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Information about the chosen edition
 *
 * name String Name of the author
 * isbn String ISBN of the published book
 * returns inline_response_200_1
 **/
// TODO
exports.authorsNameEditionsIsbnGET = function(url,db,name,isbn) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * An author
 *
 * name String Name of the author
 * returns inline_response_200
 **/
exports.authorsNameGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        db.all(`
        SELECT name, surname, date_of_birth
        FROM author a
        WHERE
            a.name='${name}'
        `, (err, rows) => {
            if(err){
                resolve({'ERROR':err})
                return
            } 
            rows[0]['links'] = [
                { 'href':`${url}/decades`.replace('//','/'), 'method':'GET'},
                { 'href':`${url}/pieces`.replace('//','/'), 'method':'GET'},
                { 'href':`${url}/editions`.replace('//','/'), 'method':'GET'},
            ]
            console.log(rows)
            resolve(rows);
        })
    });
}


/**
 * Pieces written by that author
 *
 * name String Name of the author
 * returns List
 **/
// TODO
exports.authorsNamePiecesGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = [ "", "" ];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Information about the piece
 *
 * name String Name of the author
 * piece String Name of the piece
 * returns String
 **/
// TODO
exports.authorsNamePiecesPieceGET = function(url,db,name,piece) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = "";
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * List of editors
 *
 * returns List
 **/
// TODO
exports.editorsGET = function(url,db) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = [ "", "" ];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Editions published for that collection
 *
 * name String Name of the editor
 * collection String Name of the collection
 * returns List
 **/
// TODO
exports.editorsNameCollectionsCollectionEditionGET = function(url,db,name,collection) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = [ {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
}, {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
} ];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Information about that published piece
 *
 * name String Name of the editor
 * collection String Name of the collection
 * isbn String ISBN of the published book
 * returns inline_response_200_1
 **/
// TODO
exports.editorsNameCollectionsCollectionEditionIsbnGET = function(url,db,name,collection,isbn) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Information about that collection
 *
 * name String Name of the editor
 * returns String
 **/
// TODO
exports.editorsNameCollectionsCollectionGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = "";
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * List of collections by that editor
 *
 * name String Name of the editor
 * returns List
 **/
// TODO
exports.editorsNameCollectionsGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = [ "", "" ];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * List of published pieces by that editor
 *
 * name String Name of the editor
 * returns List
 **/
// TODO
exports.editorsNameEditionsGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = [ {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
}, {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
} ];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Information about that published piece
 *
 * name String Name of the editor
 * isbn String ISBN of the published book
 * returns inline_response_200_1
 **/
// TODO
exports.editorsNameEditionsIsbnGET = function(url,db,name,isbn) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = {
    "year" : 0,
    "isbn" : "isbn",
    "title" : "title"
};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Information about the editor
 *
 * name String Name of the editor
 * returns String
 **/
// TODO
exports.editorsNameGET = function(url,db,name) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = "";
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Entry points
 *
 * returns List
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

