/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider");
var express = require('express');
var router = express.Router();

//--------首页---------
router.get("/home",function(req,res,next){
    // console.log(req.query)
    spider("/shopping/v3/hot_search_words?latitude=31.23037&longitude=121.473701",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});
//--------定位---------
router.get("/dw",function(req,res,next){
    // console.log(req.query.lnga);
    // console.log(req.query.lata);
    spider("/bgs/poi/reverse_geo_coding?latitude="+req.query.lat+"&longitude="+req.query.lng,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});
//--------天气---------
router.get("/wea",function(req,res,next){
    // console.log(req.query.lng);
    // console.log(req.query.lat);
    spider("/bgs/weather/current?latitude="+req.query.lat+"&longitude="+req.query.lng,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});
//--------进入搜索页面返回的数据---------
router.get("/search",function(req,res,next){
    // console.log(req.query.lng);
    // console.log(req.query.lat);
    spider("/shopping/v3/hot_search_words?latitude="+req.query.lat+"&longitude="+req.query.lng,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});


router.get("/meituan",function(req,res,next){
    // console.log(req.query.lng);
    // console.log(req.query.lat);
    spider("/index/DealList?num=0.18555686179519104",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        console.log(res)
    });
});
module.exports = router;
