exports.notFound = function (req, res, next) {
    res.status(404).send('ops, não foi possivel encontrar essa página :/');
};

exports.serverError = function (error, req, res, next) {
    res.status(500);
    res.send('server-error' + error)    
};