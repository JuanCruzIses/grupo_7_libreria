import { pool } from '../db.js'
const promisePool = pool.promise();

export const index = async (req, res) => {
    await promisePool.query(`SELECT * FROM libros`)
    .then(([rows]) => {
        if (rows) {
        const libros = rows
		res.render('index', {libros:libros} ) 
        }
    })
}

export const carrito = async (req, res) => {
        res.render('carrito')
    }

export const aboutUs = async (req, res) => {
        res.render('aboutUs')
    }

export const questions = (req, res) => {
        res.render('questions')
    }
