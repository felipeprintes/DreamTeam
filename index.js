/* importar as configurações do servidor */
var app = require('./config/server');

/* porta de escuta do server */
let porta = 80;

/* server ouvindo */
app.listen(porta, () => {	
	console.log(`http://localhost:${porta}`);
});