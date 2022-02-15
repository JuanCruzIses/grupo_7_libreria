const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, path.join(__dirname, '../public/images/profileImages')); 
    }, 
    filename: function (req, file, cb) {
        console.log('Imagen_De_Perfil_Actualizada');
       cb(null, (`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`));
    }
})

  const upload = multer({ storage: storage });

  module.exports = upload