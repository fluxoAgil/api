const mongoose = require('mongoose');
const URI = 'mongodb+srv://fluxoagil:Flux0Agil@cluster0.uardigv.mongodb.net/';

mongoose.connect(URI).then( () => {
    console.log('Conectado ao Banco de Dados')
});
mongoose.Promise = global.Promise;

module.exports = mongoose
