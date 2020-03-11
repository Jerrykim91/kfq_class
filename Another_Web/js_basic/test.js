// utf8:완성형코드(8비트) <-> 조합형코드:euc-kr(16비트)
// 완성형코드 :가->82(값하나대응)
// 한글 않깨지게 할려고 표준 입력 부분에 인코딩을 utf-8 지정
// 만든적도 없는데 그냥사용해 => process, os, ..  => 내장객체
process.stdin.setEncoding('utf8');

// 자바스크립트의 모든 이벤트 코드는 통일
/*
// 이벤트 매커니즘
// 클릭했다 -> 잠시후 -> 이벤트가 전달 -> 등록된 함수하 호출
// 이런 상황=> 언제 이벤트가 전달될지 아무도 모른다
// 이벤트가 발생하고 나서 뭔가를 처리해야 하는 함수는 항시 대기를 해야한다
// 이런 과점은 비동기 상황이라고 한다. 
// 비동기 프로그램을 즉각적이지 않아도 이벤트가 발생되서 전달만 되면 그때 바로
// 이어서 코드를 진행하겠금 작성하는 프로그램 스타일이다
xxx.on( '이벤트명', 콜백함수(모습:에로우,익명함수) )
// -> I/O 상황은 100% 비동기
*/
process.stdin.on('readable', ()=>{
    console.log('호출')
    // 0~ 무한대의 반복 -> while
    // 지정된 휫수를 반복 -> for
    // process.stdin.read() : 엔터치면 읽어서 리턴 함수
    // while( true ) {
    //     // 대기:사용자가 엔터칠때까지
    //     let word = process.stdin.read()
    //     process.stdout.write( word ) 
    // }
    /*
    자바의 이런 조건식은 != == 자바스크립트에서 아래처럼 변경
    == -> ===
    != -> !==
    */
    let chunk
    // 사용자가 엔터치면 값을 획득해서 chunk에 담고, 
    // 이것을 null과 비교하여 정상일때만 출력한다
    while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(`data: ${chunk}`);
        console.log(`data: ${chunk}`);
    }
} );