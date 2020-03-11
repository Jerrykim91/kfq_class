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
