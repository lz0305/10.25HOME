var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send({name:'lizhen',age:'20',aihao:'噜啦啦啦'});
  res.render('index', { title: 'Express' });
});

router.get('/shuju', function(req, res, next) {
    res.send({name:'lizhen',age:'20',aihao:'噜啦啦啦'});
});

router.post('/home', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    console.log(req.body.name);
    fs.readFile('public/write.txt','utf-8',function (err, data) {
        var arr=JSON.parse(data);
        arr.push({name:req.body.name});
        console.log(arr);
        fs.writeFile('public/write.txt',JSON.stringify(arr),function (err) {
            fs.readFile('public/write.txt','utf-8',function (err, sj) {
                var sj=JSON.parse(sj);
                res.send({data:sj});
            });
        })
    })
});

module.exports = router;
