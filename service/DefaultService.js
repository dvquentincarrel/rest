'use strict';


/**
 * List of authors
 *
 * returns List
 **/
exports.authorsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "surname" : "surname",
  "date_of_birth" : "date_of_birth",
  "name" : "name"
}, {
  "surname" : "surname",
  "date_of_birth" : "date_of_birth",
  "name" : "name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Genres of works written in this decade
 *
 * name String Name of the author
 * decade String Name of the author
 * returns String
 **/
exports.authorsNameDecadesDecadeGET = function(name,decade) {
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
exports.authorsNameDecadesDecadeGenreGET = function(name,decade,genre) {
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
exports.authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET = function(name,decade,genre,piece,isbn) {
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
exports.authorsNameDecadesDecadeGenrePieceGET = function(name,decade,genre,piece) {
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
exports.authorsNameDecadesGET = function(name) {
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
exports.authorsNameEditionsGET = function(name) {
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
exports.authorsNameEditionsIsbnGET = function(name,isbn) {
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
exports.authorsNameGET = function(name) {
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
exports.authorsNamePiecesGET = function(name) {
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
exports.authorsNamePiecesPieceGET = function(name,piece) {
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
exports.editorsGET = function() {
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
exports.editorsNameCollectionsCollectionEditionGET = function(name,collection) {
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
exports.editorsNameCollectionsCollectionEditionIsbnGET = function(name,collection,isbn) {
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
exports.editorsNameCollectionsCollectionGET = function(name) {
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
exports.editorsNameCollectionsGET = function(name) {
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
exports.editorsNameEditionsGET = function(name) {
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
exports.editorsNameEditionsIsbnGET = function(name,isbn) {
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
exports.editorsNameGET = function(name) {
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
exports.rootGET = function() {
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

