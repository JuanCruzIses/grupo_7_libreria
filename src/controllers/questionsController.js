import { pool } from '../db.js'
const promisePool = pool.promise();

export const listQuestions = async (req, res) => {
        const questions = await db.Question.findAll()
            .then(function(questions){
                res.render('questions', {questions : questions} )
        })
    }

export const addQuestions = async (req, res) => {
    await db.Question.create({

        questions_pregunta: req.body.pregunta,
        questions_respuesta: req.body.respuesta
               
    }).then(function () {
        res.render('questions')
        res.redirect("/questions")
    })
}