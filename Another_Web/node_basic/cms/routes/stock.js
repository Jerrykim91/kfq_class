var express = require('express');
var router = express.Router();
let db      = require('./db')

// ~/stock
router.get('/', function(req, res, next) {
  // 페이지를 구성하는 상수값들(문자열들)은 디비에서 관리하고, 
  // 차후에는 디비에서 읽어서 랜더링한다
  let no  =  typeof(req.query.no)  == 'undefined' ? 1  : parseInt( req.query.no )
  let amt =  typeof(req.query.amt) == 'undefined' ? 10 : parseInt( req.query.amt )
  db.selectStocks( { no:no, amt:amt }, (err, rows)=>{
    if(err){
      res.render('alert', { msg:'[1002]시스템장애, 잠시후에 다시이용하세요', url:'-1' });        
    }else{            
      res.render('stock', { title:'주식 상세 조회', menu:'주식 조회', rows:rows });  
    }
  })
  
});

// ~/stock/search
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

module.exports = router;
