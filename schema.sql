CREATE TABLE author (
    id integer PRIMARY KEY,
    name text,
    surname text,
    date_of_birth text
);

CREATE TABLE decades (
    id integer PRIMARY KEY,
    number integer
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

CREATE TABLE author_decade (
    author integer,
    decade integer,
    FOREIGN KEY (author) REFERENCES author(id),
    FOREIGN KEY (decade) REFERENCES decade(id),
    PRIMARY KEY (author, decade)
);

CREATE TABLE genre_decade (
    genre integer,
    decade integer,
    FOREIGN KEY (genre) REFERENCES genre(id),
    FOREIGN KEY (decade) REFERENCES decade(id),
    PRIMARY KEY (genre, decade)
);

CREATE TABLE piece_genre (
    piece integer,
    genre integer,
    FOREIGN KEY (piece) REFERENCES piece(id),
    FOREIGN KEY (genre) REFERENCES genre(id),
    PRIMARY KEY (piece, genre)
);

CREATE TABLE piece_edition (
    piece integer,
    edition integer,
    FOREIGN KEY (piece) REFERENCES piece(id),
    FOREIGN KEY (edition) REFERENCES edition(id),
    PRIMARY KEY (piece, edition)
);

CREATE TABLE editor_collection (
    editor integer,
    collection integer,
    FOREIGN KEY (editor) REFERENCES editor(id),
    FOREIGN KEY (collection) REFERENCES collection(id),
    PRIMARY KEY (editor, collection)
);

CREATE TABLE collection_edition (
    collection integer,
    edition integer,
    FOREIGN KEY (collection) REFERENCES collection(id),
    FOREIGN KEY (edition) REFERENCES edition(id),
    PRIMARY KEY (collection, edition)
);
