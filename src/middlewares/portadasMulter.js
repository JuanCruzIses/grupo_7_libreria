const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, path.join(__dirname, '../public/images/portadas')); 
    }, 
    filename: function (req, file, cb) {
        console.log('Portada_Subida');
       cb(null, (`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`));
    }
})

  const upload = multer({ storage: storage });

  module.exports = upload