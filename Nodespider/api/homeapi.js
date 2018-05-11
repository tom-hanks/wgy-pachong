/**
 * Created by Administrator on 2017/2/24.
 */
var spider = require("./spider");
var express = require('express');
var router = express.Router();

//-----首页
router.get("/home",function(req,res,next){

    spider("/ajax_get_live_list_by_multicate?hotroom=1&__plat=h5",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
        console.log(res)
    });
});
//----游戏分类
router.get("/game",function(req,res,next){

    spider("/index.php?method=category.list&type=game",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//----游戏列表
router.get("/gamelist",function(req,res,next){

    spider("/ajax_get_live_list_by_cate?pageno="+req.query.id+"&pagenum=10&__plat=h5&cate="+req.query.category,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//-----娱乐分类
router.get("/yule",function(req,res,next){

    spider("/index.php?method=category.list&type=yl&__plat=ios",function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});
//-----娱乐列表
router.get("/yulelist",function(req,res,next){

    spider("/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate="+req.query.yulecategory,function (result) {
        res.send(result); // 如果渲染模板 res.render("")
    });
});


module.exports = router;
