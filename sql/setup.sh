#!/bin/bash
rm test.db
sqlite3 test.db << EOF
.read schema.sql
.read author.sql
.read collection.sql
.read decade.sql
.read edition.sql
.read editor.sql
.read genre.sql
.read piece.sql
.read links.sql
EOF
