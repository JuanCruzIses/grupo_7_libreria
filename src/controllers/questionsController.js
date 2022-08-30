const db = require('../../database/models');
const { Op } = require('sequelize');
const questionsController = {
    listQuestions: async (req, res) => {
        const questions = await db.Question.findAll()
            .then(function(questions){
                res.render('questions', {questions : questions} )
        })
    },
    addQuestions: async (req, res) => {
    await db.Question.create({

        questions_pregunta: req.body.pregunta,
        questions_respuesta: req.body.respuesta
               
    }).then(function () {
        res.render('questions')
        res.redirect("/questions")
    })
}

}
module.exports = questionsController;
