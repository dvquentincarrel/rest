'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const sql = require('sqlite3');
const db = new sql.Database('sql/test.db');

module.exports.authorsGET = function authorsGET (req, res, next) {
  Default.authorsGET(req.url,db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGET = function authorsNameDecadesDecadeGET (req, res, next, name, decade) {
  Default.authorsNameDecadesDecadeGET(req.url,db,name, decade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenreGET = function authorsNameDecadesDecadeGenreGET (req, res, next, name, decade, genre) {
  Default.authorsNameDecadesDecadeGenreGET(req.url,db,name, decade, genre)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET = function authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET (req, res, next, name, decade, genre, piece, isbn) {
  Default.authorsNameDecadesDecadeGenreGenrePiecesPieceEditionsIsbnGET(req.url,db,name, decade, genre, piece, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenrePieceGET = function authorsNameDecadesDecadeGenrePieceGET (req, res, next, name, decade, genre, piece) {
  Default.authorsNameDecadesDecadeGenrePieceGET(req.url,db,name, decade, genre, piece)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesGET = function authorsNameDecadesGET (req, res, next, name) {
  Default.authorsNameDecadesGET(req.url,db,name, req)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameEditionsGET = function authorsNameEditionsGET (req, res, next, name) {
  Default.authorsNameEditionsGET(req.url,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameEditionsIsbnGET = function authorsNameEditionsIsbnGET (req, res, next, name, isbn) {
  Default.authorsNameEditionsIsbnGET(req.url,db,name, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameGET = function authorsNameGET (req, res, next, name) {
  Default.authorsNameGET(req.url,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNamePiecesGET = function authorsNamePiecesGET (req, res, next, name) {
  Default.authorsNamePiecesGET(req.url,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNamePiecesPieceGET = function authorsNamePiecesPieceGET (req, res, next, name, piece) {
  Default.authorsNamePiecesPieceGET(req.url,db,name, piece)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsGET = function editorsGET (req, res, next) {
  Default.editorsGET(req.url,db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsCollectionEditionGET = function editorsNameCollectionsCollectionEditionGET (req, res, next, name, collection) {
  Default.editorsNameCollectionsCollectionEditionGET(req.url,db,name, collection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsCollectionEditionIsbnGET = function editorsNameCollectionsCollectionEditionIsbnGET (req, res, next, name, collection, isbn) {
  Default.editorsNameCollectionsCollectionEditionIsbnGET(req.url,db,name, collection, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsCollectionGET = function editorsNameCollectionsCollectionGET (req, res, next, name) {
  Default.editorsNameCollectionsCollectionGET(req.url,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsGET = function editorsNameCollectionsGET (req, res, next, name) {
  Default.editorsNameCollectionsGET(req.url,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameEditionsGET = function editorsNameEditionsGET (req, res, next, name) {
  Default.editorsNameEditionsGET(req.url,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameEditionsIsbnGET = function editorsNameEditionsIsbnGET (req, res, next, name, isbn) {
  Default.editorsNameEditionsIsbnGET(req.url,db,name, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameGET = function editorsNameGET (req, res, next, name) {
  Default.editorsNameGET(req.url,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET(req.url,db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
