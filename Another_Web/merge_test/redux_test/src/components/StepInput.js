import React, { Component } from 'react';
import { connect } from "react-redux";
import { setStepRate } from '../actions';

class StepInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            rate:1
        }
    }
    onStepChange = (e)=>{
        // 입력값을 정수로 변환하여 전달
        let r = parseInt(e.target.value, 10)
        if (r === NaN ) return
        this.props.onChgStep( r )
        // 스토어에 있는 상태값이 변경된 후에 반영되길 원한다
        //this.setState( { rate:e.target.value})
    }
    componentWillReceiveProps(newProps){
        //console.log( 'componentWillReceiveProps' )
        // 스토어에 저장된 rate값이 변경되어서 반영되면 이쪽으로 이벤트를 타고 들어온다
        this.setState( { rate:newProps.stepValue})
    }
    render () {
        return (
            <div style={{margin:10}}>
                <input value={this.state.rate} onChange={ this.onStepChange }/>
            </div>
        )
    }
}
// 스토어에 저장된 상태값(리듀서)을 컴포넌트의 props에 연결 => connect()
let mapStateToProps = (state)=>{
    // 어떤 상태값이 어떤 props와 연결되는지 작성
    return {
        // 스토어에서 나오는 state(리듀서컴바인).(특정리듀서).상태값
        stepValue:state.counterReducer.step
    }
}
let mapDisfatcherProps = (disfatch)=>{
    return {
        // 해당 내용을 액션을 발동하여 변경된 스탭값을 전달
        onChgStep:(newStepValue)=>disfatch( setStepRate(newStepValue) )
    }
}
// Counter 클레스를 리듀서의 상태와 props를 연결하여 구조를 변경하여 다시 반환 => 모듈화
StepInput = connect(mapStateToProps, mapDisfatcherProps)(StepInput)
export default StepInput