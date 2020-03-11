const fs = require('fs')
// console.log('읽는다')
// fs.readFile('./2.txt', (err, data)=>{
//     console.log( err, data )
//     console.log('읽었다')
// })

// 파일이 n개가 존재한다. 차례대로 읽어서 출력=>나만의 비동기 처리함수구현
// ex) 1.txt 읽고 출력, 2.txt 읽고 출력, 3.txt 읽고 출력 
// err는 무시하고
fs.readFile('./1.txt', (err, data)=>{
    // 출력
    console.log( toStr(data) )
    fs.readFile('./2.txt', (err1, data1)=>{
        // 출력
        console.log( toStr(data1) )
        fs.readFile('./3.txt', (err2, data2)=>{
            // 출력
            console.log( toStr(data2) )
        })
    })
})
// fs로 읽을 텍스트 버퍼 데이터를 실제 텍스트로 변환
function toStr( data ) {
    return new String(data).toString()
}

