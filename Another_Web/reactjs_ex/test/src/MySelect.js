// 1. 필요한 모듈 가져오기
import React from 'react';
// 2. 컴포넌트 구현
class MySelect extends React.Component 
{
    constructor ( props ) {
        super(props)
        // 상태변수 초기화
        this.state = {  
            // 컴포넌트 사용시 최초로 나와야할 요소값(기본선택값)
            sel:this.props.default          
        }
    }
    onChangeHandler (e) {
        console.log( e.target.value )  
        // 상태 변수 업데이트 
        this.setState( { sel:e.target.value } )
    }
    render () {        
        const onChangeHandler = e=>this.onChangeHandler(e)
        let options = this.props.items.map( (item, idx)=>{
            // JSX 생성
            return <option key={idx}>{ item }</option>
        } )
        let {sel} = this.state
        return (<div>   
            <select value={ sel } onChange={ onChangeHandler }>
                { options }
            </select>         
        </div>)
    }
}
// 3. 컴포넌트 모듈화(대표)
export default MySelect