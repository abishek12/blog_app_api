create database blog;

use blog;

create table user(
id int primary key auto_increment not null,
firstName varchar(32) not null,
middleName varchar(32),
lastName varchar(32) not null,
email varchar(100) not null unique,
password varchar(100) not null,
role varchar(32) not null default 'student',
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp
);

create table category(
id int not null primary key auto_increment,
title varchar(255) not null,
description varchar(255),
author int,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
foreign key (author) references user(id) on delete cascade
);

create table post(
id int not null primary key auto_increment,
title varchar(255) not null,
slug varchar(255) not null,
category_id int not null,
author_id int not null,
expert varchar(255),
content text not null,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
foreign key (author_id) references user(id) on delete cascade,
foreign key (category_id) references category(id) on delete cascade
);

create table comment (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

create table likes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
