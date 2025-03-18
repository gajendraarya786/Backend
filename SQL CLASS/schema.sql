create table user(
      id varchar(50) primary key,
      username varchar(50) unique,
      email varchar(50) unique not null,
      password varchar(50) not null
);
insert into user
(id, username, email, password)
values
(1, "gajendraarya", "gkarya@gmail.com", "hello@123");

show tables;