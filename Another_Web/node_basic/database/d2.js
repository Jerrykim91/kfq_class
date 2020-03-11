const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12341234',
    database : 'nodedb'
});
// 접속 완료나, 접속 종료 응답이 비동기적으로 들어오니,
// 콜백함수를 등록하여 해당 시그널을 받는다
connection.connect( (err)=>{
    if( err ){
        console.log('접속 오류', err)
    }else{
        console.log('접속 성공')
        // 실제 디비와 연결되었다
        // 연결종료
        connection.end( ( e )=>{
            console.log('접속 종료?', e)
        } );
    }
} );
//console.log('연결 완료')

//connection.end();
//console.log('연결 종료')



// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// if (error) throw error;
// console.log('The solution is: ', results[0].solution);
// });

