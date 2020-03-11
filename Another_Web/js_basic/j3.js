// 함수
// 자바에서는 메소드
// 왜 사용하는가? => 재사용성을 높인다, 빨리 개발
// 절차적프로그래밍 => 함수지향적프로그래밍 
//                 => 객체지향적프로그래밍
// --------------------------------------------
let a = 1
let b = 1
let result = a + b
console.log( result )

a = 1
b = 2
result = a + b
console.log( result )

// 절차적 코드는 코드를 반복해서 쓰지 않는 이상
// 재사용할수가 없다 -> 비효율적 => 코드가 너무 커짐
// 패턴이 바뀌면 다 바꿔야 한다 => 문제점 노출
// 해결방안 => 함수(메쏘드)를 이용하여 재사용성을 높인다
// 함수 문법 확인
/*
// 표준함수 문법
function 함수명 (매개변수) 
{
    수행문(statements):생략가능
    return 값:생략가능
}
*/
// 사용
function add( a, b ) 
{
    return a + b
}
// ---------------------
a = 1
b = 2
result = add( a, b )
console.log( result )

console.log( add( 1, 3 ) )




