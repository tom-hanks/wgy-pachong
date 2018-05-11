/**
 * Created by Administrator on 2017/2/12.
 */
// var http = require("http"); //http 请求
var https = require("https"); //https 请求
var querystring = require("querystring");
function request(path,callback) {
    var options = {
        hostname: 'api.m.panda.tv',//dc.srh9.com
        port: 443, //端口号 https默认端口 443， http默认的端口号是80
        path: path,
        method: 'GET'
    };

    var req = https.request(options, function (res) {

        var json = ""; //定义json变量来接收服务器传来的数据
        // console.log(res);
        //res.on方法监听数据返回这一过程，"data"参数表示数数据接收的过程中，数据是一点点返回回来的，这里的chunk代表着一条条数据
        res.on("data", function (chunk) {
            json += chunk; //json由一条条数据拼接而成
        })
        //"end"是监听数据返回结束，callback（json）利用回调传参的方式传给后台结果再返回给前台
        res.on("end", function () {
            callback(json);
        })
    })

    req.on("error", function () {
        console.log('error')
    })
    req.end(); //必须要要写，

}
module.exports = request;