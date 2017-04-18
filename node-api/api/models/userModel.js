var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = new Schema({
	name:String
});
exports.model = mongoose.model('userModel',model);