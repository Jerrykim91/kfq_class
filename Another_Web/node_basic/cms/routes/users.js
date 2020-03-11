var express = require('express');
var router = express.Router();
const db    = require('./db')

// ~/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 로그인 처리 ---------------------------------------------
// ~/users/login
router.get('/login', function(req, res, next) {
  res.render('login')
});
// ~/users/login, post
router.post('/login',(req, res, next)=>{  
  let uid =  req.body.uid
  let upw =  req.body.upw
  // 디비 쿼리 수행 -> mysql  계열 사용 : mariadb
  // 판단 -> 디비쿼리 
  db.selectLogin(uid, upw, (err, rows)=>{
    if(err){
      res.render('alert',     { url:'-1', msg:'[1001] 관리자에게 문의하세요' })
    }else{        
        if( rows.length == 0 ){
          res.render('alert', { url:'-1', msg:'아이디나 비번을 확인하세요' })
        }else{
          // 배열의 길이가 0보다 크면 회원이다
          // 세션 생성
          req.session.uid = uid
          req.session.name = rows[0].name
          // 로그인성공 -> 메인서비스 화면으로 자동 이동
          res.render('alert', { url:'/', msg:`로그인성공, ${rows[0].name}님 방갑습니다.` })
        }
    }
  })
})
// --------------------------------------------------------
// 로그아웃
router.get('/logout', function(req, res, next) {
  // 세션 제거
  req.session.uid  = null
  req.session.name = null
  // 홈페이지로 이동
  res.redirect('/')
});

module.exports = router;
