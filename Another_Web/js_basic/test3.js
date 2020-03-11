// 특정 기능을 만들기 위해 테스트한 코드
for(let i=0; i<100;i++) {
    // 값의 범위 :0.0xxx ~ 0.9xxx,  양수다
    // 99를 곱하면
    // 1~99 => 0~98:99개
    //let a = parseInt( Math.random() * 99 ) + 1
    // 함수 테스트
    console.log( gameAI() )
}
// 현재 코드에 필요한 수준
function gameAI () {
    return parseInt( Math.random() * 99 ) + 1
}
// 이부분은 직접 만들어보세요-> 함수의 일반화 작업
// a<= 난수 <= b or a<= 난수 < b
// 0~5 사이 난수는 쉬우나 2~8 => 2를 빼면 0~6 사이 난수는 어렵다
function gameAIEx ( a, b ) {
    return parseInt( Math.random() * 99 ) + 1
}