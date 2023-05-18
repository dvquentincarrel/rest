CREATE TABLE author (
    id integer PRIMARY KEY,
    name text,
    surname text,
    date_of_birth text
);

CREATE TABLE decade (
    id integer PRIMARY KEY,
    range text
);

CREATE TABLE genre (
    id integer PRIMARY KEY,
    name string
);

CREATE TABLE piece (
    id integer PRIMARY KEY,
    title string
);

CREATE TABLE editor (
    id integer PRIMARY KEY,
    name string
);

CREATE TABLE collection (
    id integer PRIMARY KEY,
    name string
);

CREATE TABLE edition (
    id integer PRIMARY KEY,
    title string,
    year integer,
    isbn string
);

--CREATE TABLE author_decade (
--    author integer,
--    decade integer,
--    FOREIGN KEY (author) REFERENCES author(id),
--    FOREIGN KEY (decade) REFERENCES decade(id),
--    PRIMARY KEY (author, decade)
--);
--
--CREATE TABLE author_decade_genre (
--    author integer,
--    decade integer,
--    genre integer,
--    FOREIGN KEY (author) REFERENCES author(id),
--    FOREIGN KEY (genre) REFERENCES genre(id),
--    FOREIGN KEY (decade) REFERENCES decade(id),
--    PRIMARY KEY (genre, decade, author)
--);
--
--CREATE TABLE author_decade_genre_piece (
--    author integer,
--    decade integer,
--    genre integer,
--    piece integer,
--    FOREIGN KEY (author) REFERENCES author(id),
--    FOREIGN KEY (genre) REFERENCES genre(id),
--    FOREIGN KEY (decade) REFERENCES decade(id),
--    FOREIGN KEY (piece) REFERENCES piece(id),
--    PRIMARY KEY (genre, decade, author, piece)
--);
--
--CREATE TABLE editor_collection (
--    editor integer,
--    collection integer,
--    FOREIGN KEY (editor) REFERENCES editor(id),
--    FOREIGN KEY (collection) REFERENCES collection(id),
--    PRIMARY KEY (editor, collection)
--);
--
--CREATE TABLE editor_collection_edition (
--    editor integer,
--    collection integer,
--    edition integer,
--    FOREIGN KEY (editor) REFERENCES editor(id),
--    FOREIGN KEY (collection) REFERENCES collection(id),
--    FOREIGN KEY (edition) REFERENCES edition(id),
--    PRIMARY KEY (editor, collection, edition)
--);
--
--CREATE TABLE piece_edition (
--    piece integer,
--    edition integer,
--    FOREIGN KEY (piece) REFERENCES piece(id),
--    FOREIGN KEY (edition) REFERENCES edition(id),
--    PRIMARY KEY (piece, edition)
--);

CREATE TABLE links (
    author integer,
    decade integer,
    genre integer,
    collection integer,
    editor integer,
    edition integer,
    piece integer,
    FOREIGN KEY (author) REFERENCES author(id),
    FOREIGN KEY (genre) REFERENCES genre(id),
    FOREIGN KEY (decade) REFERENCES decade(id),
    FOREIGN KEY (piece) REFERENCES piece(id),
    FOREIGN KEY (editor) REFERENCES editor(id),
    FOREIGN KEY (collection) REFERENCES collection(id),
    FOREIGN KEY (edition) REFERENCES edition(id),
    PRIMARY KEY (genre, decade, author, piece, editor, collection, edition)
);
