'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const sql = require('sqlite3');
const db = new sql.Database('sql/test.db');

module.exports.authorsGET = function authorsGET (req, res, next) {
  Default.authorsGET(db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGET = function authorsNameDecadesDecadeGET (req, res, next, name, decade) {
  Default.authorsNameDecadesDecadeGET(db,name, decade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenreGET = function authorsNameDecadesDecadeGenreGET (req, res, next, name, decade, genre) {
  Default.authorsNameDecadesDecadeGenreGET(db,name, decade, genre)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET = function authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET (req, res, next, name, decade, genre, piece, isbn) {
  Default.authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET(db,name, decade, genre, piece, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenrePieceGET = function authorsNameDecadesDecadeGenrePieceGET (req, res, next, name, decade, genre, piece) {
  Default.authorsNameDecadesDecadeGenrePieceGET(db,name, decade, genre, piece)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesGET = function authorsNameDecadesGET (req, res, next, name) {
  Default.authorsNameDecadesGET(db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameEditionsGET = function authorsNameEditionsGET (req, res, next, name) {
  Default.authorsNameEditionsGET(db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameEditionsIsbnGET = function authorsNameEditionsIsbnGET (req, res, next, name, isbn) {
  Default.authorsNameEditionsIsbnGET(db,name, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameGET = function authorsNameGET (req, res, next, name) {
  Default.authorsNameGET(db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNamePiecesGET = function authorsNamePiecesGET (req, res, next, name) {
  Default.authorsNamePiecesGET(db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNamePiecesPieceGET = function authorsNamePiecesPieceGET (req, res, next, name, piece) {
  Default.authorsNamePiecesPieceGET(db,name, piece)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsGET = function editorsGET (req, res, next) {
  Default.editorsGET(db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsCollectionEditionGET = function editorsNameCollectionsCollectionEditionGET (req, res, next, name, collection) {
  Default.editorsNameCollectionsCollectionEditionGET(db,name, collection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsCollectionEditionIsbnGET = function editorsNameCollectionsCollectionEditionIsbnGET (req, res, next, name, collection, isbn) {
  Default.editorsNameCollectionsCollectionEditionIsbnGET(db,name, collection, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsCollectionGET = function editorsNameCollectionsCollectionGET (req, res, next, name) {
  Default.editorsNameCollectionsCollectionGET(db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsGET = function editorsNameCollectionsGET (req, res, next, name) {
  Default.editorsNameCollectionsGET(db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameEditionsGET = function editorsNameEditionsGET (req, res, next, name) {
  Default.editorsNameEditionsGET(db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameEditionsIsbnGET = function editorsNameEditionsIsbnGET (req, res, next, name, isbn) {
  Default.editorsNameEditionsIsbnGET(db,name, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameGET = function editorsNameGET (req, res, next, name) {
  Default.editorsNameGET(db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET(db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
