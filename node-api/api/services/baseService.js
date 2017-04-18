var mongoose = require('../node_modules/mongoose');
var Schema = mongoose.Schema;
class Service{
    constructor(){
    }
    add(obj, name,callback){
        var name = name || '';
        var result = {};    
        var instance = this.entity(obj);
        instance.save(function(err, item, numAffected) {
            if (err) {
                result = { 'ok': false, 'data': {}, 'message': '新增' + name + '失败' }
            } else {
                result = { 'ok': true, 'data': item, 'message': '新增' + name + '成功' }
            }
            callback(result);        
        });
    }
    delete(obj, name,callback){
        var result = {};
        var id = obj.id;    
        this.entity.remove({ '_id': id }, function(err) {
            if (err) {
                result = { 'ok': false, 'data': {}, 'message': '删除' + name + '失败' };
            } else {
                result = { 'ok': true, "data": {}, 'message': '删除' + name + '成功' };
            }
            callback(result);
        });   
    }
}
exports.service = Service;