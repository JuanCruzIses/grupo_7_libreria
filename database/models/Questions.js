module.exports = (sequelize, dataTypes) => {
    let alias = "Question";

    let cols = {
        id:{ 
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        questions_pregunta:{ type: dataTypes.STRING},
        questions_respuesta:{ type: dataTypes.STRING}, 
      
    };

    let config = {
        tablename: "Questions",
        timestamps: false
    };


    const Question = sequelize.define(alias, cols, config)

   

    return Question
}


