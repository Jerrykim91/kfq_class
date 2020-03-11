// 모듈
// 대표 모듈(뒤에서다룬다), 일반적 모듈
// exports를 붙이지 않는 변수,함수,클레스등등
// 이 안에서만 쓸수있다->private
// 일반적 모듈
let cost = 1500
exports.cost_ex = 1500

let getCost  = ()=>{}
exports.getCost2 = ()=>{
    // 모듈화 된 요소를 사용하고 싶으면 
    // 보이는 그대로 네이밍을 다 사용
    return exports.cost_ex + cost
}

// 대표모듈화
// module.exports = {}
// ES2015~
// 코드의 맨 밑에서 선언 하거나  or
// 클레스 앞에서 선언한다
// export default XXX
// export default class XXX 

// 일반 모듈화
// exports.xxx : 이전
// export xxx  : ES2015~ 