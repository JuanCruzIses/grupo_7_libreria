CREATE TABLE Genero (
genero_id INT AUTO_INCREMENT NOT NULL UNIQUE,
genero_descripcion VARCHAR(30),
PRIMARY key(genero_id));

CREATE TABLE Subgenero (
 subgenero_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 subgenero_descripcion  VARCHAR(30),
PRIMARY KEY( subgenero_id ));

CREATE TABLE Autor (
 autor_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 autor_nombre  VARCHAR(100),
 autor_apellido  VARCHAR(100),
 autor_biografia  TEXT,
PRIMARY KEY( autor_id ));

CREATE TABLE Editorial (
 editorial_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 editorial_descripcion  VARCHAR(50), 
PRIMARY KEY( editorial_id ));

CREATE TABLE Libro (
 libro_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 libro_genero_id  INT,
 libro_subgenero_id  INT,
 libro_autor_id  INT,
 libro_titulo  VARCHAR(50),
 libro_sinopsis  TEXT,
 libro_publicacion  DATE,
 libro_paginas  INT,
 libro_editorial_id  INT,
 libro_precio  DECIMAL,
 libro_imagen VARCHAR(100),
PRIMARY KEY( libro_id ),
FOREIGN KEY ( libro_genero_id ) REFERENCES Genero ( genero_id ),
FOREIGN KEY ( libro_subgenero_id ) REFERENCES Subgenero ( subgenero_id ),
FOREIGN KEY ( libro_autor_id ) REFERENCES Autor ( autor_id ),
FOREIGN KEY ( libro_editorial_id ) REFERENCES Editorial ( editorial_id ));

CREATE TABLE Rol (
 rol_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 rol_descripcion  VARCHAR(20),
PRIMARY KEY( rol_id ));

CREATE TABLE Usuario (
 usuario_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 usuario_nombre  VARCHAR(20) NOT NULL,
 usuario_apellido  VARCHAR(20) NOT NULL,
 usuario_imagen VARCHAR(100) NOT NULL,
 usuario_email  VARCHAR(50) NOT NULL,
 usuario_contrasenia  VARCHAR(20) NOT NULL,
 usuario_rol_id  INT not NULL,
PRIMARY KEY( usuario_id ),
FOREIGN KEY ( usuario_rol_id ) REFERENCES Rol ( rol_id ));

CREATE TABLE  Pedido (
 pedido_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 pedido_usuario_id  INT,
 pedido_direccion  VARCHAR(60),
 pedido_precio  DECIMAL,
 pedido_metodo_pago VARCHAR(60),
PRIMARY KEY( pedido_id ),
FOREIGN KEY ( pedido_usuario_id ) REFERENCES Usuario ( usuario_id ));

CREATE TABLE  PedidoDetalle (
 pedidoDetalle_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 pedidoDetalle_pedido_id  INT,
 pedidoDetalle_libro_id  INT,
 pedidoDetalle_descripcion  VARCHAR(100),
 pedidoDetalle_cantidad INT,
 pedidoDetalle_precio  DECIMAL NOT NULL,
PRIMARY KEY( pedidoDetalle_id ),
FOREIGN KEY ( pedidoDetalle_pedido_id ) REFERENCES Pedido ( pedido_id ),
FOREIGN KEY ( pedidoDetalle_libro_id ) REFERENCES Libro ( libro_id ));