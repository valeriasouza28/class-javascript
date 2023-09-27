const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
  storage: multer.diskStorage({}),
  limits: 2 * 1024 + 1024,
  fileFilter: (req, file, cb) => {
    //  define formatos aceitos de mime tyepes 
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',  
      'image/gif'
    ]

    // temos uma condição onde verifica se o arquivo passado está dentro dos formatos aceitos defindo pelo array allowedMimes se incluir ele retorna um callback passando como primeiro parâmetro nullo que é erro que é sempre o erro e o segundo parâmetro é true no caso de sucesso. E caso o formato desse arquimo não esteja em formato aceito pelo na lista ele vai retornar um erro dizendo que tipo de arquivo é inválido
    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalide file type.'))
    }
  }

}
