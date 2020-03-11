// 같은 모듈을 여기저기서 require()해도 캐싱처리가 되서 메모리를 사용하지 않는다
// 성능에 무관
var express = require('express');
// 라우터 생성
var router  = express.Router();

/* GET home page. */
// req:요청, res:응답객체(꾸미면->html클라이언트한테 도착), next(일단무시)
// method는 클라이언트가 서버로 데이터를 전송하는 방식
// get, post, put,...등이 존재한다
// get : 보안에 취약,데이터크기작다,http 헤더를통해전송,url뒤에 붙어서 간다
// m.naver.com/news?id=1831732123192
// url?키=값&키=값...
// https://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=100
// post : 보안에 우수, 대량 전송 OK, http 바디를 통해 전송
router.get('/', function(req, res, next) {
  // views 밑에 있는 index.ejs를 읽어서
  // 2번째 파라미터로 전송한 데이터를 버무려서(랜더링해서) 응답한다 (html을 전송)
  res.render('index', { title2: 'Express4', name:'웹서비스' });
});
// router.메소드( url, 콜백함수:응답담당 )
// http://localhost:3000/hello  페이지를 구성하시오
// ~/hello
router.get('/hello',(req, res, next)=>{
  res.send('')
})
// ~/login, get방식, 텍스트로 login page 응답
router.get('/login',(req, res, next)=>{
  // 인코딩 처리를 않하면 한글이 깨짐(헤더설정:차후)
  res.end('login page 페이지')
})

// 대표 모듈
module.exports = router;
