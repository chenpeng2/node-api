var express = require('express');
var router = express.Router();
var Services = require('../services/services');
var mongoose = require('../node_modules/mongoose');
mongoose.connect('mongodb://localhost/test');
/*
	listen all
	name 名称
	method 方法
	par 参数
	entity 实体实例
	service 服务实例
	result 返回结果
	obj 请求参数
	参数为空或者错误时调用empty
	防止程序崩溃
*/
router.get('/', function(req, res, next) {
  res.send('respodsfdsnd with a resource');
});
router.post('/:name?/:method?/:par?',function(req,res,next){         
    var name    = req.params.name || 'empty';      
    var method  = req.params.method || 'empty'; 
    var par     = req.params.par || '';          
    var service = new Services[name+'Service']();          
    var obj     = req.body || {};                
    obj.par     = par;                
    if(!Services[name+'Service']){
        service = new Services.emptyService();
    }            
    service[method](obj,name,function(result){        
        res.json(result);
    }); 

    return; 
});
module.exports = router;