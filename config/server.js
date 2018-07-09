/**
 * import de bibliotecas
 */
const express 			= require('express');
const consign 			= require('consign');
const bodyParser 		= require('body-parser');
const expressValidator 	= require('express-validator');
const expressSession 	= require('express-session');
const error 			= require('./../src/middleware/error')

/* iniciar o objeto do express */
const app = express();


/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* configurções de middleware  */
app.use(express.static('./src/public'));
app.use(expressValidator());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(expressSession({
	secret: 'eusoudemais',
	resave: false,
	saveUninitialized: false
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('src/models')	
	.then('src/controllers')
	.then('src/routes')	
	.into(app);

app.use(error.notFound)
app.use(error.serverError)

/* exportar o objeto app */
module.exports = app;