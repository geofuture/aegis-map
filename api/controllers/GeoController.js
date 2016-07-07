/**
 * GeoController
 *
 * @description :: Server-side logic for managing geos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res, next){
		//console.log(req.query.data);
		//var data = {"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[101.69769287109375,15.91379094700381],[102.25799560546875,15.987734284909871],[101.93939208984375,15.10394633500913],[101.48895263671874,15.008463695004872],[101.69769287109375,15.91379094700381]]]}};
		var data = JSON.parse(req.query.data);
		Geo.create(data).exec(function(err, user){ 
			if(err) {
				console.log(err);
			}
			console.log("Create.");
			Geo.findOne({'properties.name':data.properties.name}).exec(function (err, record) {
				if(err) {
					console.log(err);
				}
				 console.log(record);
				 sails.sockets.broadcast('maproom', 'showmap', {'map':record});
			});
			res.send("Create");
		});
	},
};

