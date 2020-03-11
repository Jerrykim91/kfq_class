// 변수, 타입
/*
 자바 : 
 > 타입 변수명;
 js:
 > 키워드 변수명;(;를 생략(모던), 현재는 혼용, 
                 기준은 여려줄 표현을 한줄에 표현할때)
 > 키워드  => 타입을 특정하지 않는다 
          => 값이 들어올때(세팅될때) 결정
          => 타입 추론
 > 키워드 종류 : var, 추가됨(모던): const(상수), let(변수 범위에대한 조정:코드블럭기준)
*/
// 변수 ani를 선언하고 cat이라는 문자열을 세팅
// 해서 변수는 문자열 타입이 되었다
var ani = "cat";
console.log( ani )
/*
 $는 프럼프트를 표현한것
 현재 디렉토리 목록 확인
 $ ls
 $ dir
 디렉토리 이동
 $ cd js_basic
 node 실행
 $ node j1.js
*/
// 새로운값 대입
ani = "dog";
console.log( ani )
// 다른 타입으로 대입
ani = 1
console.log( ani )

// 상수 -> 변하지 않는다 -> readonly
// 상수의 변수명은 가급적이면 대문자로 기술한다
const NAME = "품질";
console.log( NAME )
// 오류가 발생하면 그 밑으로는 코드 진행 불가
// TypeError: Assignment to constant variable.
//NAME = "품질2";
console.log( NAME )

// var  Vs  let
var a = "노드"
console.log(a)
if(a) {
    var a = "품질"
    console.log(a)
}
// 조건문안에 있는 a 변수가 조건문 밖에 있는 a변수에 영향을
// 미친다 => 즉, 같은 변수다
console.log(a)
console.log('--------------')
// let를 사용 -> 블록 스코프, block scope, 블록 범위
var a = "노드"
console.log(a)
if(a) {
    // let는 가장 가까이서 감싸고 있는 {}:코드블럭에만
    // 영향을 미친다
    let a = "품질"
    console.log(a)
}
console.log(a)

// var(과도기중이라 사용가능)
// 변수 키워드 => let
// 상수 키워드 => const 