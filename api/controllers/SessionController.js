/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcryptjs');
module.exports = {
	'new' : function (req,res){
		// var oldDateObj  = new Date();
		// var newDateObj = new Date(oldDateObj.getTime() + 60000);
		// req.session.cookie.expires = newDateObj;
		// req.session.authenticated = true;
		// console.log(req.session);
		res.view('session/new');
		return;
	},
	create: function (req, res, next) {
		User.findOne({
		  name:req.param('name')
		}).exec(function (err, user){
		  if (err) {
		    return res.negotiate(err);
		  }
		  if (!user) {
		    res.redirect('/session/new');
		    return;
		  }
		// console.log(req.param('password'));
		 bcrypt.compare(req.param('password'),user.encryptedPassword,function(err,valid){
		 	if(err) return next(err);
		 	if(!valid){
		 		res.redirect('/session/new');
		 		return;
		 	}
		 //console.log("OK");
		 req.session.authenticated = true;
		 req.session.User = user;
		 res.redirect('/map');
		 });
		});
	},
	destroy: function(req, res, next){
		req.session.destroy();
		res.redirect('/session/new');
	}
};

