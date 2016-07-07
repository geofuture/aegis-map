/**
 * MapController
 *
 * @description :: Server-side logic for managing maps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res, next){
		return res.view();
	},
	check: function (req, res){
		
		 if (req.isSocket === true) {
		 	//console.log(req.body.data);
			sails.sockets.join(req.socket, 'maproom');
			//==============================
			Geo.find().exec(function (err, record) {
				if(err) {
					console.log(err);
				}
				//console.log(record);
				res.json({"map": record});
			});

			//==============================
			
  		}

		
	},
	update: function (req, res){
		if (req.isSocket === true) {
			console.log(req.body.name);
			var data = JSON.parse(req.body.data);
			Geo.update({'properties.name':req.body.name},data).exec(function afterwards(err, updated){
			  if (err) {
			    console.log(err);
			  }
			  sails.sockets.broadcast('maproom', 'updatemap', {'name':req.body.name,'data':data});
			  console.log('Updated.');
			});
		}
	},
	delete: function (req, res){
		if (req.isSocket === true) {
			console.log(req.body.name);
			//var data = JSON.parse(req.body.data);
			Geo.destroy({'properties.name':req.body.name}).exec(function afterwards(err, updated){
			  if (err) {
			    console.log(err);
			  }
			  sails.sockets.broadcast('maproom', 'deletemap', {'name':req.body.name});
			  console.log('Delete.');
			});
		}
	}
	// showmap: function( req, res ) {
	//   if (req.isSocket === true ) {
	//      sails.sockets.broadcast('maproom', 'showmap', {message:'show map'});
	//   }
	//   return res.send(200);
	// }
};

