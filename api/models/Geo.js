/**
 * Geo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  autoPK: true,
  types: {
    size: function() {
       return true;
    }
  },
  attributes: {
  	type: {
  		type: 'json',
            required: true
  	},	
    	properties: {
  		type: 'json',
  	},
     	geometry: {
  		type: 'json',
            required: true
  	},
  },
        toJSON: function(){
        var obj = this.toObject();
        delete obj._csrf;
        return obj;
      }
};

