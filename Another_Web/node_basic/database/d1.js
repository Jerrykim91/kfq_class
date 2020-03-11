// mysql 모듈을 이용하여 노드에서 mysql 엑세스, 쿼리 수행
// 1. 모듈 가져오기
const mysql = require('mysql')

// 2. 연결 객체 생성
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123412345',
    database : 'nodedb'
});
// 아래 코드는 동기식 코드이다
// 그런데, 비번틀리게 설정하고 진행해 보면 코드는 쭉 진행되는데, 
// 나중에 문제가 발생된게 등장한다. -> 타이밍이 맞지 않는다 -> 이런스타일로는
// node기반으로 구성할수 없다
// 3. 연결
connection.connect();
console.log('연결 완료')

// 4. 해제  
connection.end();
console.log('연결 종료')



// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// if (error) throw error;
// console.log('The solution is: ', results[0].solution);
// });

