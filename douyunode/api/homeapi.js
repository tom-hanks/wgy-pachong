/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider");
var express = require('express');
var router = express.Router();

//--------首页---------
router.get("/home",function(req,res,next){
    // console.log(req.query)
    spider("/index/getHomeData",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});
//--------详情也主播---------   req.query.id代表自己传的时候参数名是id  req.query后面的参数就是
router.get("/detailanchor",function(req,res,next){
    // console.log(req.query)
    spider("/video/getList?rid="+req.query.id,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});

//--------详情页聊天---------
router.get("/detailchat",function(req,res,next){
    // console.log(req.query)
    spider("/room/getBarrageList?rid=1009279&t=0&count=100",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});
//--------详情页相关主播---------
router.get("/detailabout",function(req,res,next){
    // console.log(req.query)
    spider("/room/getSimilarList?rid=1009279",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});

router.post("/detailhls",function(req,res,next){
    // console.log(req.query)
    spider("/room/stream",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});

router.get("/homesearch",function(req,res,next){
    // console.log(req.query)
    spider("/search/getTodayTopData?limit=10&isAjax=1",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});

router.get("/homecate",function(req,res,next){
    // console.log(req.query)
    spider("/category?type=",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});
router.get("/danmu",function(req,res,next){
    // console.log(req.query)
    spider("/room/getBarrageList?rid=4809&t=0&count=100",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});

module.exports = router;
