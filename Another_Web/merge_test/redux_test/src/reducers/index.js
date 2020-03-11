// 액션을 스토어에 연결 담당
// 액션을 가져온다
import * as act from '../actions'
// 컴바인 (여러개의 리듀서를 묶는)
import { combineReducers } from "redux";

// 저장소 준비
const counterInitState = {
    value:0, // 카운트 값
    step:1   // 카운트 증감값
}
// 리듀서 정의 => 액션에 따른 상태값을 교체 (원본을 복사하여 수정하여 대체)
// 어떤 일을 할것인지 구현하는 부분
const counterReducer = ( state=counterInitState, action ) => {
    switch(action.type){
        // 카운터 증가
        case act.COUNTER_INCREMENT: // 원본 state 복제 -> value값을 step만큼 증가 -> 반환
            return {
                ...state,
                value:state.value + state.step
            }
        // 카운터 감소
        case act.COUNTER_DECREMENT: // 원본 state 복제 -> value값을 step만큼 감소 -> 반환
            return Object.assign( {}, state, { value:state.value - state.step} ) 
        // 증감 변수값 수정
        case act.COUNTER_STEP_RATE: // 원본 state 복제 -> tep값 수정 -> 반환
            return {
                ...state,
                step:action.rate
            }
    }
    // 해당되는 액션이 없다면 원본 그대로 리턴
    return state
}
// 더미 리듀서 => 실제 사용 않함. 커바인 사용을 위하 임시로 생성
const dumyReducers = (state={v:''}, action)=>state

// n개의 리듀서를 하나로 묶고(컴바인)
const reducerTotal = combineReducers( {
    counterReducer,
    dumyReducers
} )

// 컴바일된 내용을 모듈화
export default reducerTotal