var express = require('express');
var router  = express.Router();
let db      = require('./db')

// http://localhost:3000?no=1&amt=10
// no : 페이지 번호
// amt : 한 페이지에서 보이는 양

// 2. 데이터는 수치형으로 변환해서 sql쪽으로 전달
// 3. sql쪽에서 쿼리에 수치를 반영
router.get('/', function(req, res, next) {
  // 1. 전달 데이터 획득:get방식 -> 데이터가 없을 경우 대비
  let no  =  typeof(req.query.no)  == 'undefined' ? 1  : parseInt( req.query.no )
  let amt =  typeof(req.query.amt) == 'undefined' ? 10 : parseInt( req.query.amt )
  console.log( no, typeof(no), amt, typeof amt)
  /*
  let no  = req.query.no
  let amt = req.query.amt
  console.log( no, typeof(no), amt, typeof amt)
  // no나 amt중 하나라도 undefined 이면 기본값이 1, 10이고
  // 아니면 전단될값을 수치형으로 받아준다
  if( typeof(no) == 'undefined' || typeof(amt) === 'undefined' ){
    no  = 1
    amt = 10
  }else{
    no  = parseInt( no )
    amt = parseInt( amt )
  }
  */
  // undefined 'undefined' undefined 'undefined'
  // 1 string 10 string

  // tbl_trade 테이블에서 데이터를 획득하여 렌더링에 던진다
  db.selectStocks( { no:no, amt:amt }, (err, rows)=>{
    if(err){

    }else{
      //console.log( rows )
      res.render('index', { title2: 'Express4', rows:rows });
    }
  })
  
});

router.get('/search', (req, res, next)=>{
  // 1. 검색어 획득
  let keyword = req.query.keyword
  console.log(keyword)
  // 2. 해당 검색어가 포함된 주식 데이터 획득 -> 쿼리
  db.selectStocksByKeyword( {keyword:keyword}, (err, rows)=>{
    // 3. 응답
    // js의 객체를 res.json()에 넣으면 json이 된다
    res.json( rows )
  } )
  
})

// 데이터를 주소에 붙여서 보낼때 사용:동적파라미터
// 특정 코드에 해당되는 주식 정보 상세보기
router.get( '/info/:code', (req, res, next)=>{
  db.selectStockByCode( {code:req.params.code}, (err, rows)=>{
    // JSON.stringify() => 자바스크랩트 객체를 JSON 문자열로 변환함수
    //res.end( JSON.stringify(rows) )
    // views/info.ejs를 생성, stock데이터를 표 형식으로 렌더링
    res.render( 'info', { stock:rows[0], update:req.query.update } )
  } )
} )
// 주식 정보 수정 처리
router.post( '/info/:code', (req, res, next)=>{
  // post방식으로 전송된 데이터 획득
  let {cur, rate} = req.body
  // 동적파라미터 방식으로 전송된 데이터 획득 
  // => 디비에서 데이터 업데이트시 대상을 찾는 조건값(고유값)
  let {code} = req.params
  db.updateStockByCode({cur:cur, rate:rate, code:code},(err, results)=>{
    //console.log( results.changedRows, err, results )
    if( results.changedRows == 0 || err ){
      res.render( 'alert', {msg:'수정실패', url:'-1'} )
    }else{
      res.render( 'alert', {msg:'수정성공', url:`/info/${code}`} )
    }

  })
})


module.exports = router;