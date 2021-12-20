const Libro = require('./Libro');


module.exports = (sequelize, dataTypes) => {
    let alias = "Editorial";

    let cols = {        
        editorial_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            notNull: true
        },
        editorial_descripcion: {
            type: dataTypes.STRING(50),
        } 
    };

    let config = {
        tablename: "Editoriales",
        timestamps: false
    };

    
    const Editorial = sequelize.define(alias, cols, config)
    
    /*Editorial.associate = function(){
        Editorial.belongsTo(Libro, {
            as: "libro_editorial",
            foreignKey: "libro_editorial_id"
        })
    }*/
    
    return Editorial
}
