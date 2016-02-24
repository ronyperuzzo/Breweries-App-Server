'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrewerySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    dateCreated: { 
		type: Date, 
		default: Date.now 
	},
	dateUpdated: { 
		type: Date, 
		default: Date.now 
	}
})

module.exports = mongoose.model('Brewery', BrewerySchema);