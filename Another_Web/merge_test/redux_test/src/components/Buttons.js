import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement } from '../actions';

class Buttons extends Component {
    render () {
        return (
            <div>
                <button onClick={ this.props.onIncrement }>증가</button>
                <button onClick={ this.props.onDecrement }>감소</button>
            </div>
        )
    }
}
// 리덕스 상에 정의한 액션 함수를 컴포넌트의 props와 연결
let mapDisfatcherProps = (disfatch)=>{
    return {
        // props에 추가, 이벤트 발생하면 함수 호출 => 액션 호출
        onIncrement: ()=>disfatch( increment() ),
        onDecrement: ()=>disfatch( decrement() )
    }
}
// Counter 클레스를 리듀서의 상태와 props를 연결하여 구조를 변경하여 다시 반환 => 모듈화
// connect( state와props연결, 함수연결 )
Buttons = connect(undefined, mapDisfatcherProps)(Buttons)

export default Buttons