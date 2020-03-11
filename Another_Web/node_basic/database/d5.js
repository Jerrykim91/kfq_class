// 해당 코드를 누구나 불러서 사용할수 있게 함수의 모듈화를 구성
const mysql = require('mysql')

let selectLogin = ( uid, upw, cb )=>{
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

selectLogin( 'guest', '1', ( err, rows )=>{
    if(err){
        // 접속 오류 or 쿼리 오류 등등 오류가 발생한 상황
        console.log('접속오류 or 쿼리 오류')
    }else{
        // 쿼리 성공후 결과를 정상적으로 받은 상황
        //console.log( rows )        
        if( rows.length == 0 ){
            // 회원아님
            console.log( '회원아님' )
        }else{
            // 배열의 길이가 0보다 크면 회원이다
            console.log( '회원임', rows[0].name+'님 방갑습니다' )
        }
    }
} )