// 모듈, 모듈 가져오기 -> node에서 등장
// 기존 클라이언트사이트  js의 한계점 
// html이 없으면 존재할수없다. js를 쪼개기를 못한다->구조화한계
// node에서는 js가 하나의 모듈로 인식, node자체는 js 의 집합
// node는 모듈의 집합이다.

// 모듈 가져오기 (자바의 import하고 유사)
// 써드파트 패키지 모듈(npmjs.com)
// require('모듈명')

// 내가 만든 모듈인경우
// require('상대경로/모듈명.js')
// require('상대경로/모듈명')
const mod = require('./m5_mod')
let {cost_ex, getCost2} = mod
console.log( mod )
console.log( mod.cost_ex )
mod.getCost2()

// ES2015~ 이후 모듈 가져오기는 
// import 대표모듈, {개별모듈, 개별모듈} from '상대경로/모듈명'
// import {cost_ex, getCost2} from './m5_mod'
