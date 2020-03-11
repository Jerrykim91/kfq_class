var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 세션을 체크해서 세션이 없으면(고개 정보가 없으면) 로그인으로 redirect
  // 세션체크를 app.js에서 일곽적으로 수행하기 때문에, 코드를 원복시켰다
  // if( req.session.uid == null || typeof(req.session.uid) === 'undefined' ){ // 세션없음
  //   res.redirect('/users/login')
  // }else{
  //   // 세션이 존재하므로 홈페이지 노출
  //   res.render('index', { title: 'Express' });
  // }
  res.render('index', { title: 'Express' });  
});

// ~/chat
router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Express' });  
});

module.exports = router;
