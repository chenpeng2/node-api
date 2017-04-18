var baseService = require('./baseService').service;
var mongoose    = require('../node_modules/mongoose');
var Schema      = mongoose.Schema;
var model       = require('../models/userModel').model;
class Service extends baseService{
    constructor(){
        super();
        this.entity = model;
    }       
}
exports.service = Service;