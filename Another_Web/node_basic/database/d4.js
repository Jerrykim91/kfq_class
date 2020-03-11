const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12341234',
    database : 'nodedb'
});
connection.connect( (err)=>{
    if( err ){
        console.log('접속 오류', err)
    }else{   
        // 아이디와 비번을 외부에서 세팅되게 수정 => 일반화(누구나 사용가능)     
        let sql = `select * from tbl_users where
                        uid = ? and upw = ? ;`
        // query() 함수의 2번인자가 sql 문자열에 동적으로 데이터를 세팅하는 위치
        // 2번인자는 생략가능
        connection.query( sql, ['guest', '1'], (error, rows)=>{
            console.log( error, rows[0].name )            
            connection.end( ( e )=>{
                console.log('접속 종료?', e)
            } );
        } ) 
    }
} );
// d5.js 생성
// 해당 코드를 누구나 불러서 사용할수 있게 함수의 모듈화를 구성