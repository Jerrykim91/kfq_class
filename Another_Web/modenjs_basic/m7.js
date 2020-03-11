// 스프레드 연산
// ... 
let a1 = ['콜라','물','사이다']
let a2 = ['밥','햄버거']
// a1 배열 맴버 나오고, a2 배열 맴버가 차례대로 나와서 총 5개 맴버를 가진 배열
// 전체값을 대변해서 다 포함시키는 연산자
let a3 = [ ...a1, ...a2 ]
console.log( a3 )
// join은 배열의 맴버들을 특정 구분자를 기준으로 하나의 문자열로 생성
let tmp = a3.join(',')
console.log( tmp )
// split는 특정 문자열을 구분자 기분으로 분해하여 배열로 만드는 함수
console.log( tmp.split(',') )
let url = 'https://sports.news.naver.com/wfootball/news/read.nhn?oid=413&aid=0000084237'
tmp = url.split('/') 
console.log( '마지막 인덱스 번호', tmp.length-1 )
console.log( tmp[tmp.length-1].split('?')[0] ) 

// a1 기준, 맨 뒤에 있는 데이터를 배열구조분해로 획득한다
var [b1] = a1.reverse()
console.log( b1, a1 ) // a1값 자체 변경되었다->훼손되었다

// 원본의 사본을 만들어서 작업 OK
a1.reverse() // 원상복구
// 사본을뜨고, 뒤집은후에, 배열구조분해
let [a6] = [...a1].reverse()
console.log( a6 )

// 함수인자로 활용
test( '콜라','물','사이다' )
// 함수의 인자로 스프레드 연산을 받으면 배열로 들어온다
function test ( ...args ) {
    console.log( 'args=>', args ) 
    
    var [ e, ...remain ] = args
    // e->콜라 remain->[ '물', '사이다' ]
    //console.log( e, remain )
    var [ f, ...end ] = remain.reverse()
    console.log( e, f, end, remain )
    // 콜라 사이다 [ '물' ] [ '사이다', '물' ] 
}

// 함수를 호출할때 스프레드를 사용 케이스
function test2 ( a, b ) {
    return a + b
}
const data = [1,2]
// 함수의 인자에 배열구조분해가 진행되어서 a에1, b에2가 대입이 된것이다
// var [a, b] = [1,2]
console.log( test2( ...data ) )
console.log( test2( data[0], data[1] ) )

