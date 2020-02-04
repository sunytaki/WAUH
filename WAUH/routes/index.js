
/*
 * GET home page.
 */

exports.index = function(req, res){//22
  res.render('index', { title: 'Express' });
};