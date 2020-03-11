const fs = require('fs')

// 1.txt, 2.txt, 3.txt 데이터를 읽어서 배열에 담아 결과를 돌려주는
// 함수를 구성

function testReadFile( cb ) {
    // 결과 담는 그릇:배열
    let results = []
    fs.readFile('./1.txt', (err, data)=>{
        results.push( toStr(data) ) // 데이터를 배열에 추가        
        fs.readFile('./2.txt', (err1, data1)=>{
            results.push( toStr(data1) )
            fs.readFile('./3.txt', (err2, data2)=>{
                results.push( toStr(data2) )
                // 확인
                //console.log( results.length, results )
                // results를 함수 밖으로 내보내야 한다
                // return을 사용할수 없다 -> 콜백함수로 처리
                cb(results)
            })
        })
    })
}
// 테스트
testReadFile( ( data )=>{
    console.log('호출했다', data)
} )













function toStr( data ) {
    return new String(data).toString()
}

