module.exports = function(application){
	application.get('/', function(req, res){
		application.src.controllers.indexCtrl.main(req, res)		
	});
}