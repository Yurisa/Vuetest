var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

mongoose.connect('mongodb://127.0.0.1:27017/imoocmail');

mongoose.connection.on('connected', ()=>{
    console.log("MongoDB connected success");
});

mongoose.connection.on('error', ()=>{
    console.log("MongoDB connected fail");
});

mongoose.connection.on('disconnected', ()=>{
    console.log("MongoDB connected disconnected");
});

router.get("/", function(req, res, next) {
    Goods.find({}, function(err, doc){
        console.log(doc)
        if(err){
            res.json({
                status:'1',
                msg:err.message
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            });
        }
    })    
});

module.exports = router;