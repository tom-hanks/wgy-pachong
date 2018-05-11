/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider");
var express = require('express');
var router = express.Router();

//--------首页---------
router.get("/index",function(req,res,next){
    // console.log(req.query)
    spider("/index/getHomeData",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        // console.log(res)
    });
});



module.exports = router;
