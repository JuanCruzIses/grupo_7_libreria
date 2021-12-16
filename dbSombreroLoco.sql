CREATE TABLE Generos (
genero_id INT AUTO_INCREMENT NOT NULL UNIQUE,
genero_descripcion VARCHAR(30),
PRIMARY key(genero_id) 
);

CREATE TABLE Subgeneros (
 subgenero_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 subgenero_descripcion  VARCHAR(30),
PRIMARY KEY( subgenero_id ) 
);

CREATE TABLE  Autores  (
 autor_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 autor_nombre  VARCHAR(100),
 autor_apellido  VARCHAR(100),
 autor_biografia  TEXT,
PRIMARY KEY( autor_id ) 
);

CREATE TABLE  Libros  (
 libro_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 libro_genero_id  INT,
 libro_subgenero_id  INT,
 libro_autor_id  INT,
 libro_titulo  VARCHAR(60),
 libro_sinopsis  TEXT,
 libro_publicacion  DATE,
 libro_paginas  INT,
 libro_editorial  VARCHAR(50),
 libro_precio  DECIMAL,
PRIMARY KEY( libro_id ),
FOREIGN KEY ( libro_genero_id ) REFERENCES  Generos  ( genero_id ),
FOREIGN KEY ( libro_subgenero_id ) REFERENCES  Subgeneros  ( subgenero_id ),
FOREIGN KEY ( libro_autor_id ) REFERENCES  Autores  ( autor_id )
);

CREATE TABLE  Roles  (
 rol_id  INT NOT NULL UNIQUE,
 rol_descripcion  VARCHAR(20),
PRIMARY KEY( rol_id )
);

CREATE TABLE  Usuarios  (
 usuario_id  INT AUTO_INCREMENT UNIQUE NOT NULL,
 usuario_nombre  VARCHAR(20) NOT NULL,
 usuario_apellido  VARCHAR(20) NOT NULL,
 usuario_email  VARCHAR(30) NOT NULL,
 usuario_contraseña  VARCHAR(20) NOT NULL,
 usuario_rol_id  INT not NULL,
PRIMARY KEY( usuario_id ),
FOREIGN KEY ( usuario_rol_id ) REFERENCES  Roles  ( rol_id )
);

CREATE TABLE  Pedidos (
 pedido_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 pedido_usuario_id  INT,
 pedido_direccion  VARCHAR(60),
 pedido_precio  DECIMAL,
 pedido_metodo_pago VARCHAR(60),
PRIMARY KEY( pedido_id ),
FOREIGN KEY ( pedido_usuario_id ) REFERENCES  Usuarios  ( usuario_id ));

CREATE TABLE  pedidoDetalles (
 pedidoDetalle_id  INT AUTO_INCREMENT NOT NULL UNIQUE,
 pedidoDetalle_pedido_id  INT,
 pedidoDetalle_libro_id  INT,
 pedidoDetalle_descripcion  VARCHAR(100),
 pedidoDetalle_cantidad INT,
 pedidoDetalle_precio  DECIMAL NOT NULL,
PRIMARY KEY( pedidoDetalle_id ),
FOREIGN KEY ( pedidoDetalle_pedido_id ) REFERENCES Pedidos ( pedido_id ),
foreign key (pedidoDetalle_libro_id) references Libros (libro_id));