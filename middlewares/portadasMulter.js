const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, path.join(__dirname, '../public/images/portadas')); 
    }, 
    filename: function (req, file, cb) {
        global.PORTADA_NAME = (`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
       cb(null, PORTADA_NAME);
    } 
  })

  const upload = multer({ storage: storage });

  module.exports = upload