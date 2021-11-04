const fs = require('fs');
const biblioteca = fs.readFileSync('../data/libros.json', 'utf-8')
const libros = JSON.parse(biblioteca);

const mainController = {
    index : (req, res) => {
        res.render('index', {libros})
    }
};

module.exports = mainController;