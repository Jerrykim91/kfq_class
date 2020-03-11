// 콜백헬을 해결하기위해 3가지 방법을 제시
// Promise ~ then(es2015), async ~ await(ES2017), generator(es2016)
// "요구사항 a1, a2, a3를 차례대로 읽어서 출력 하시오"
const fs = require('fs')


// STEP1. 일반 비동기 처리 예시
fs.readFile('a1.txt', (err, data)=>{
    console.log( '[1] 일반적처리 =>',  data )
    fs.readFile('a2.txt', (err, data)=>{
        console.log( '[1] 일반적처리 =>', data )
        fs.readFile('a3.txt', (err, data)=>{
            console.log( '[1] 일반적처리 =>', data )
        })  
    })
})

///////////////////////////////////////////////
// STEP2. Promise ~ then => 가장 많이 사용
function readFilePromise( fileName )
{
    return new Promise( ( cb )=>{
        fs.readFile(fileName, (err, data)=>{
            cb( data )
        })
    } )
}
readFilePromise('a1.txt')
.then( (data)=>{
    console.log('[2] Promise ~ then =>',  data)
    return readFilePromise('a2.txt')
} )
.then( (data)=>{
    console.log('[2] Promise ~ then =>',  data)
    return readFilePromise('a3.txt')
} )
.then( (data)=>{
    console.log('[2] Promise ~ then =>',  data)
} )
///////////////////////////////////////////////
// STEP3. async ~ await => 최근 많이 사용됨
function readFilePromise2( fileName )
{
    return new Promise( ( cb, reject )=>{
        fs.readFile(fileName, (err, data)=>{
            cb( data )
        })
    } )
}
// 사용
// 함수 정의 앞에 async, 함수 내부 비동기 내용 앞에 await
async function readAsync()
{
    console.log( '[3] async ~ await =>', await readFilePromise2('a1.txt') )
    console.log( '[3] async ~ await =>', await readFilePromise2('a2.txt') )
    console.log( '[3] async ~ await =>', await readFilePromise2('a3.txt') )
}
readAsync()
///////////////////////////////////////////////
// STEP4. generator
function readFilePromise3( g, fileName )
{
    fs.readFile(fileName, (err, data)=>{
        g.next( data )
    })
}
// g.next() : 이전단계가 끝나면 다음 단계로 진행시키는 역활 담당
// yield    : 작업이 완료될때까지 대기 시킨다 -> await 유사
const g = (function * () {
    console.log( '[4] generator=>', yield readFilePromise3(g, 'a1.txt') ) 
    console.log( '[4] generator=>', yield readFilePromise3(g, 'a2.txt') )
    console.log( '[4] generator=>', yield readFilePromise3(g, 'a3.txt') )
})()
g.next()
