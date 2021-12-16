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
            type: dataTypes.VARCHAR(60)
        },
        libro_sinopsis: {
            type: dataTypes.TEXT
        },
        libro_publicacion: {
            type: dataTypes.DATE
        },
        libro_paginas: {
            type: dataTypes.INTEGER
        },
        libro_editorial: {
            type: dataTypes.VARCHAR(50),
        },  
        libro_precio: {
            type: dataTypes.DECIMAL
        } 
    };

    let config = {
        tablename: "Libro",
        timestamps: false
    };


    const Libro = sequelize.define(alias, cols, config)

    return Libro
}

