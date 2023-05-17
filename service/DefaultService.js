'use strict';


/**
 * List of authors
 *
 * returns List
 **/
exports.authorsGET = function(db) {
    return new Promise(function(resolve, reject) {
        db.all('SELECT name, surname, date_of_birth FROM author', (err, rows) => {
            rows.forEach(row => {
                row['links'] = {
                    'href':`/authors/${row.name}`,
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
exports.authorsNameDecadesDecadeGET = function(db,name,decade) {
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
 * Pieces written of that genre
 *
 * name String Name of the author
 * decade String Decade of creation
 * genre String Genre of the piece
 * returns List
 **/
exports.authorsNameDecadesDecadeGenreGET = function(db,name,decade,genre) {
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
 * Information about the chosen edition
 *
 * name String Name of the author
 * decade String Decade of creation
 * genre String Genre of the piece
 * piece String Name of the piece
 * isbn String ISBN of the published book
 * returns inline_response_200_1
 **/
exports.authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET = function(db,name,decade,genre,piece,isbn) {
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
exports.authorsNameDecadesDecadeGenrePieceGET = function(db,name,decade,genre,piece) {
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
exports.authorsNameDecadesGET = function(db,name) {
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
 * Published pieces by the author
 *
 * name String Name of the author
 * returns List
 **/
exports.authorsNameEditionsGET = function(db,name) {
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
exports.authorsNameEditionsIsbnGET = function(db,name,isbn) {
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
exports.authorsNameGET = function(db,name) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = {
    "surname" : "surname",
    "date_of_birth" : "date_of_birth",
    "name" : "name"
};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * Pieces written by that author
 *
 * name String Name of the author
 * returns List
 **/
exports.authorsNamePiecesGET = function(db,name) {
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
exports.authorsNamePiecesPieceGET = function(db,name,piece) {
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
exports.editorsGET = function(db) {
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
exports.editorsNameCollectionsCollectionEditionGET = function(db,name,collection) {
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
exports.editorsNameCollectionsCollectionEditionIsbnGET = function(db,name,collection,isbn) {
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
exports.editorsNameCollectionsCollectionGET = function(db,name) {
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
exports.editorsNameCollectionsGET = function(db,name) {
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
exports.editorsNameEditionsGET = function(db,name) {
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
exports.editorsNameEditionsIsbnGET = function(db,name,isbn) {
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
exports.editorsNameGET = function(db,name) {
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
exports.rootGET = function(db) {
    return new Promise(function(resolve, reject) {
        resolve({'links':
            [
                {'href':'/authors','method':'GET'},
                {'href':'/editors','method':'GET'}
            ]
        });
    });
}

