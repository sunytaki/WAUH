
/*
 * GET home page.
 */


exports.index = function(req, res){//난 기돈이다
  res.render('index', { title: 'Express' });
};