BEGIN TRANSACTION;
insert into collection (id, name) values (1, 'folio-sf');
insert into collection (id, name) values (2, 'folio-classique');
insert into collection (id, name) values (3, 'folio');
insert into collection (id, name) values (4, 'folio-histoire');
insert into collection (id, name) values (5, 'folio-essais');
COMMIT;
