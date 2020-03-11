// 1. 필요한 모듈 가져오기
import React from 'react';

// 2. 컴포넌트 구현
class MyInput extends React.Component 
{
    constructor ( props ) {
        super(props)
        // 상태변수 초기화
        this.state = {
            value:''
        }
    }
    onChangeHandler (e) {
        //console.log( e.target.value )
        // 숫자만 입력, 숫자외 문자들을 무시 -> 정규식
        // 입력값을 정규식에 넣어서 수치만 남기고 다 제거
        const v  = e.target.value.replace(/[^0-9]/g, '')
        console.log( v )
        // 상태변수 업데이트
        this.setState( { value:v} )
    }
    render () {
        const onChangeHandler = e=>this.onChangeHandler(e) 
        const onSubmitHandler = e=>{
            console.log('submit 호출, react 스타일은 아니다')
            e.preventDefault()
            // 이제는 쓸수 있다 (form 전송 이벤트를 인터셉트했다)
            // ajax => ..... => 입력값 초기화
            this.setState( { value:''} )
        }
        return (<div>
            <form onSubmit={ onSubmitHandler }>
                <input type='text' value={ this.state.value }  
                onChange={ onChangeHandler } placeholder='숫자만입력'/>
                <input type='submit' value='전송'/>
            </form>
        </div>)
    }
}

// 3. 컴포넌트 모듈화(대표)
export default MyInput