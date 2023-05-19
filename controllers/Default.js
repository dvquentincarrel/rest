'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const sql = require('sqlite3');
const db = new sql.Database('sql/test.db');

module.exports.authorsGET = function authorsGET (req, res, next) {
  Default.authorsGET(`${req['rawHeaders'][1]}/${req.url}`,db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGET = function authorsNameDecadesDecadeGET (req, res, next, name, decade) {
  Default.authorsNameDecadesDecadeGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, decade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenreGET = function authorsNameDecadesDecadeGenreGET (req, res, next, name, decade, genre) {
  Default.authorsNameDecadesDecadeGenreGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, decade, genre)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenrePieceIsbnGET = function authorsNameDecadesDecadeGenrePieceIsbnGET (req, res, next, name, decade, genre, piece, isbn) {
  Default.authorsNameDecadesDecadeGenrePieceIsbnGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, decade, genre, piece, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesDecadeGenrePieceGET = function authorsNameDecadesDecadeGenrePieceGET (req, res, next, name, decade, genre, piece) {
  Default.authorsNameDecadesDecadeGenrePieceGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, decade, genre, piece)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameDecadesGET = function authorsNameDecadesGET (req, res, next, name) {
  Default.authorsNameDecadesGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, req)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameEditionsGET = function authorsNameEditionsGET (req, res, next, name) {
  Default.authorsNameEditionsGET(`${req['rawHeaders'][1]}/${req.url}`,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameEditionsIsbnGET = function authorsNameEditionsIsbnGET (req, res, next, name, isbn) {
  Default.authorsNameEditionsIsbnGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNameGET = function authorsNameGET (req, res, next, name) {
  Default.authorsNameGET(`${req['rawHeaders'][1]}/${req.url}`,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsNamePiecesGET = function authorsNamePiecesGET (req, res, next, name) {
  Default.authorsNamePiecesGET(`${req['rawHeaders'][1]}/${req.url}`,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsGET = function editorsGET (req, res, next) {
  Default.editorsGET(`${req['rawHeaders'][1]}/${req.url}`,db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsCollectionIsbnGET = function editorsNameCollectionsCollectionIsbnGET (req, res, next, name, collection, isbn) {
  Default.editorsNameCollectionsCollectionIsbnGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, collection, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsCollectionGET = function editorsNameCollectionsCollectionGET (req, res, next, name, collection) {
  Default.editorsNameCollectionsCollectionGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, collection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameCollectionsGET = function editorsNameCollectionsGET (req, res, next, name) {
  Default.editorsNameCollectionsGET(`${req['rawHeaders'][1]}/${req.url}`,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameEditionsGET = function editorsNameEditionsGET (req, res, next, name) {
  Default.editorsNameEditionsGET(`${req['rawHeaders'][1]}/${req.url}`,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameEditionsIsbnGET = function editorsNameEditionsIsbnGET (req, res, next, name, isbn) {
  Default.editorsNameEditionsIsbnGET(`${req['rawHeaders'][1]}/${req.url}`,db,name, isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editorsNameGET = function editorsNameGET (req, res, next, name) {
  Default.editorsNameGET(`${req['rawHeaders'][1]}/${req.url}`,db,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET(`${req['rawHeaders'][1]}/${req.url}`,db)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsDELETE = function authorsDELETE (req, res, next) {
  Default.authorsDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsPUT = function authorsPUT (req, res, next, body) {
  Default.authorsPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsPOST = function authorsPOST (req, res, next, body) {
  Default.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
