// js의 클레스 정리
// ----------------------------------
// 1. 객체리터럴
// 2. 슈퍼클레스 확장
// 3. 생성자 함수 구현
// 4. 생성자 함수 + prototype을 통한 구현
// 5. class 키워드를 이용한 구현 => 리액트에서 사용하는 방식 
//    => babel => 4번방식 변경되서 구동
// -----------------------------------
// 1. 객체리터럴:인자를 넘길때 데이터 종류가 많으면, 1회용객체
var obj = {
    name:'품질',
    getName:function(){
        // 에로우 함수를 사용시 this 용법 주의
        return this.name
    }
}
console.log( obj )
console.log( obj.name )
console.log( obj.getName() )
// ------------------------------------------------
// 2. 슈퍼클레스 확장 (Object)
var p = new Object()
console.log( p ) // {}
// 객체에 .찍고 맴버 바로 추가 가능
p.name = '맴버변수추가'
p.getName = function(){
    return this.name
}
console.log( p ) // {}
// ------------------------------------------------
// 3. 생성자 함수 구현
function Person( name, age ) 
{
    this.name = name
    this.age  = age
    this.getName = function () {
        return this.name
    }
}
var obj1 = new Person( '품질', 10 )
console.log( obj1 )
// -> 객체를 만들면 만들수록 함수 영역이 계속해서 생성된다 -> 문제
// -------------------------------------------------------
// 4. 생성자 함수 + prototype을 통한 구현
function PersonEx( name ) 
{
    this.name = name
}
PersonEx.prototype.age = 10
PersonEx.prototype.getName = function(){
    return this.name
}
console.log( new PersonEx('품질2') )  
// ----------------------------------------------
// 5. class 키워드를 이용한 구현
class Food {
    // 생성자
    constructor ( name, age ) {
        // 맴버 변수는 this.xx라고 바로 사용하면 바로 생김
        this.name = name
        this.age  = age
    }
    // 맴버함수
    info () {
        console.log( `${this.name} / ${this.age}` )
    }
}
let food = new Food('사과', 10000)
food.info()
console.log( food.name, food )
// 상속 => 부모의 것(맴버변수, 함수) 다 사용가능, 재정의 가능, 
// 자식을 새로 기능을 추가
class FoodEx extends Food
{
    // 자식은 새로운 기능을 추가한다
    attach () {
        console.log('로건 손갈고리, 회복력')
    }
    // 재정의 override
    info () {
        console.log( `이것은 재정의 ${this.name} / ${this.age}` )
    }
}
let fe = new FoodEx( '애플망고', 10 )
console.log( fe.name )
fe.info()
fe.attach()
console.log( fe )




