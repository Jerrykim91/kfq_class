// 함수 
// 표준함수는 정의 순서에 상관없이 먼저 사용 가능 
// 표준함수가 먼저 메모리에 올라온다
console.log( add( 100, 1) )
function add( a, b ) 
{
    return a + b
}
console.log( add( 100, 1) )

// 익명함수 (제한적으로 사용)
// 함수의 이름이 없다-> 호출을 못한다 -> 1회성으로만 사용
//console.log( addEx( 5, 6) ) // error
let addEx = function ( a, b ) {
    return a + b
}
console.log( addEx( 5, 6) )

// 에로우함수(화살표함수:모던에서등장)
let addEx2 = ( a, b ) => {
    return a + b
}


// 콜백함수(나중에 확인)
// 비동기식 프로그래밍의 핵심 문법
function cbTest ( a, b, cb ) {
    cb( a, b)
}
cbTest( 1, 2, function(x,y){
    console.log( x+y )
} )
cbTest( 1, 2, (x,y)=>{
    console.log( x+y )
} )