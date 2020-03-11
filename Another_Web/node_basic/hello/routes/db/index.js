// 해당 코드를 누구나 불러서 사용할수 있게 함수의 모듈화를 구성
const mysql = require('mysql')

// 일반 모듈화(개별 모듈화)
exports.selectLogin = ( uid, upw, cb )=>{
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '12341234',
        database : 'nodedb'
    });
    connection.connect( (err)=>{
        if( err ){
            //console.log('접속 오류', err)
            // 접속 오류가 발생하면 콜백을 호출하여 해당 상황을 전달
            cb( err )
        }else{   
            let sql = `select * from tbl_users where uid = ? and upw = ? ;`
            connection.query( sql, [uid, upw], (error, rows)=>{                        
                connection.end();
                // 결과를 돌려줘라 2
                cb( error, rows )
            } ) 
        }
    } );
}
// 앞으로 디비쪽 함수는 인자가 ( 전달데이터덩어리(객체), 콜백함수 )
// 이렇게 2개로만 세팅한다
//exports.selectStocks = ( params, cb )=>{
exports.selectStocks = ( {no, amt}, cb )=>{
    // 객체 구조분해
    //let {no, amt} = params
    console.log( no, amt )
    //console.log( params.no, params.amt )
    // no라고 쓰고 싶은데?
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '12341234',
        database : 'nodedb'
    });
    connection.connect( (err)=>{
        if( err ){            
            cb( err )
        }else{   
            let sql = `select code, name, cur, rate from tbl_trade
            order by name asc
            limit ?, ?
            ;`
            connection.query( sql, [ (no-1)*amt, amt ], (error, rows)=>{                        
                connection.end();
                // 결과를 돌려줘라 2
                cb( error, rows )
            } ) 
        }
    } );
}

// 검색어가 포함된 주식 목록 정버를 조회하여 돌려주는 함수
exports.selectStocksByKeyword = ( {keyword}, cb )=>{    
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '12341234',
        database : 'nodedb'
    });
    connection.connect( (err)=>{
        if( err ){            
            // rows 항목을 결과가 없다라는 의미의 빈배열 []를 넣어서
            // 혹시라도 이 함수를 사용하는 개발자의 의도하지 않게 
            // 결과를 사용할경우 오류가 나는 부분을 방지
            cb( err, [] )
        }else{   
            let sql = `select name, code from tbl_trade
            where name like '%${keyword}%'
            ;`
            connection.query( sql, (error, rows)=>{                        
                connection.end();
                // 결과를 돌려줘라 2
                cb( error, rows )
            } ) 
        }
    } );
}

// code를 이용하여 주식 정보 하나를 상세하게 다 가져오는 함수
exports.selectStockByCode = ( {code}, cb )=>{    
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '12341234',
        database : 'nodedb'
    });
    connection.connect( (err)=>{
        if( err ){            
            // rows 항목을 결과가 없다라는 의미의 빈배열 []를 넣어서
            // 혹시라도 이 함수를 사용하는 개발자의 의도하지 않게 
            // 결과를 사용할경우 오류가 나는 부분을 방지
            cb( err, [] )
        }else{   
            let sql = `select * from tbl_trade
            where code = ?;`
            connection.query( sql, [code], (error, rows)=>{                        
                connection.end();
                // 결과를 돌려줘라 2
                cb( error, rows )
            } ) 
        }
    } );
}

// code를 이용하여 특정 주식 정보를 수정하고 결과를 돌려주는 함수
exports.updateStockByCode = ( {code, cur, rate}, cb )=>{    
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '12341234',
        database : 'nodedb'
    });
    connection.connect( (err)=>{
        if( err ){                        
            cb( err )
        }else{   
            let sql = `update tbl_trade set cur=?, rate=?
            where code=?`
            connection.query( sql, [cur, rate, code], (error, results)=>{                        
                connection.end();
                // 결과를 돌려줘라 2
                cb( error, results )
            } ) 
        }
    } );
}