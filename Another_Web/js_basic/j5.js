// class 
// 객체지향프로그래밍을 하기 위해
// 기존의 4가지 방식,  모던 1개 추가(지향점)

// 1. 객체 리터럴
// 아주 많이 사용함, 1회성 객체
// 함수(객체생성자)호출시 매개변수가 많다면 객체 리터럴 
// 형태로 통으로 던지는 경우가 아주 빈번하다
let obj = {
    name:'hi',  // 맴버 변수
    getName:function () { // 맴버 함수
        // 자기 자신을 가르키는 키워드 
        // => this or self(파이썬)
        return this.name
    }
}
console.log( obj )
// 맴버 변수 사용
console.log( obj.name )
// 맴버 함수 호출
console.log( obj.getName() )

// 2. Object 확장 (잘 사용 않함)
let obj2 = new Object()
console.log( obj2 )
// 맴버변수 추가, 초기화
obj2.name = "품질"
console.log( obj2 )
// 맴버 함수 추가
obj2.getName = function() {
    return this.name
}
console.log( obj2.getName() )


// 모던 스크립트를 살펴볼때 체크
// 3. 생성자 함수
// 4. 생성자 함수 + 프로토타입
// 5. class