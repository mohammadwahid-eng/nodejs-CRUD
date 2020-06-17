exports.index = function(req, res) {
    res.render('index');
}

exports.not_found = function(req, res) {
    res.send("404 Not Found");
}