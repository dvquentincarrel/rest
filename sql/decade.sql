BEGIN TRANSACTION;
insert into decade (id, range) values (01, '1980-1990');
insert into decade (id, range) values (02, '1990-2000');
insert into decade (id, range) values (03, '2000-2010');
insert into decade (id, range) values (04, '2010-2020');
insert into decade (id, range) values (05, '2020-2030');
COMMIT;
