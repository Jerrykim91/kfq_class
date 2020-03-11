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
        console.log('접속 성공')  
        // 쿼리 수행
        let sql = `select * from tbl_users where
                        uid = 'guest'
                    and 
                        upw = '1'
                    ;`
        connection.query( sql, (error, rows)=>{
            console.log( error, rows[0].name )
            // 쿼리 수행 완료
            connection.end( ( e )=>{
                console.log('접속 종료?', e)
            } );
        } ) 
    }
} );



// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// if (error) throw error;
// console.log('The solution is: ', results[0].solution);
// });

