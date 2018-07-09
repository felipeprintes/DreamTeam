function UsuariosDAO(){
    // this._connection = connection();
    console.log("conexao efetuada com sucesso")
}


/**
 * medotos
 */

UsuariosDAO.prototype.login = function(email, pass){
    console.log('-> login chamada')

    return new Promise(resolve => {
        if( email == "glauber@youcourse.com" && pass == "1234" ){
            var id = 12345
            resolve (id)
        } else {         
            console.log(email)   
            console.log(pass)   
            reject(false)
        }
    })
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    console.log('-> inserirUsurio chamada')
}

UsuariosDAO.prototype.removerUsuario = (usuario) => {
    console.log('-> remover usuario chamada')
}


module.exports = function(){
	return UsuariosDAO;
}