const Editorial = require('./Editorial');
const Autor = require('./Autor');
const Subgenero = require('./Subgenero');
const PedidoDetalle = require('./PedidoDetalle');
const Genero = require('./Genero');

module.exports = (sequelize, dataTypes) => {
    let alias = "Libro";

    let cols = {
        libro_id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        libro_genero_id : {
            type: dataTypes.INTEGER,
            references: {
                model: 'Genero',
                key: 'genero_id'}
        },
        libro_subgenero_id :  {
            type: dataTypes.INTEGER,
            references: {
                model: 'Subgenero',
                key: 'subgenero_id'}
        },
        libro_autor_id:{
            type: dataTypes.INTEGER,
            references: {
                model: 'Autor',
                key: 'autor_id'}
        },
        libro_titulo: {
            type: dataTypes.STRING(60)
        },
        libro_sinopsis: {
            type: dataTypes.TEXT
        },
        libro_paginas: {
            type: dataTypes.INTEGER
        },
        libro_editorial: {
            type: dataTypes.STRING(50),
        },  
        libro_precio: {
            type: dataTypes.DECIMAL
        }, 
        libro_imagen: {
            type: dataTypes.STRING(100)
        },
        libro_stock : {
            type: dataTypes.INTEGER,
        },
    };

    let config = {
        tablename: "Libros",
        timestamps: false
    };


    const Libro = sequelize.define(alias, cols, config)

    Libro.associate = function(models){
        Libro.belongsTo(models.PedidoDetalle, {
            as: "pedidoDetalles",
            foreignKey: "pedidoDetalle_libro_id"
        })
    }
   
    Libro.associate = function(models){
        Libro.hasMany(models.Genero, {
            as:'Generos',
            foreignKey:"libro_genero_id"
        })
    }
    
    Libro.associate = function(models){
        Libro.hasMany(models.Subgenero, {
            as:'subgeneros',
            foreignKey:"libro_subgenero_id"
        })
    }
    
    Libro.associate = function(models){
        Libro.hasMany(models.Autor, {
            as:'autores',
            foreignKey:"libro_autor_id"
           
        })
    }
   
    Libro.associate = function(models){
        Libro.hasMany(models.Editorial, {
            as:'editoriales',
            foreignKey:"libro_editorial_id"
        })
    }

    return Libro
}

