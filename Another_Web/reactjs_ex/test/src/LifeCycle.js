import React from 'react';
// js 안에서는 컴포넌트를 여러개 둘수 있다
// 생성자나, 이벤트함수를 별도로 맴버로 빼서 컴포넌트를 만들 필요가 없다면
// 함수형태로 컴포넌트를 만들어도 OK
// 함수형 컴포넌트
function Mod2 ( props )
{
  return (<div>{props.name}</div>)
}
// 클레스형 컴포넌트
class Mod extends React.Component
{
  render () {
    return (<div>hi</div>)
  }
}
// 일반 모듈화
export class Mod3 extends React.Component
{
  render () {
    return (<div>hi3</div>)
  }
}
// 대표 모듈화
// 라이프 사이클 => 어플리케이션 제작쪽에는 항상 공통적으로 포함되는 사항
// LifeCycle : 컴포넌트의 생애주기, 기본적인 이벤트 함수들이 
// 어떤 상황에 어떤 순서로 자동 호출되는지 확인
// 이를 통해서 코드 작성시 타이밍을 잡을수 있다
export default class LifeCycle extends React.Component
{
  // 컴포넌트 생애주기는 render() 제외하고 한번만 호출된다
  // 1. 생성자는 객체 생성시 단 1회 호출된다
  constructor ( props ) {
    super(props)
    console.log('1.  생성자')
    this.state = {
      n:0
    }
  }
  // 2. 화면이 보일려고 한다 => 마운트 될려고 한다
  componentWillMount () {
    console.log('2.  componentWillMount()')
  }
  // 3. 최초 1회 한번 호출되고, state값이 바뀌면 또 호출된다
  render () {
    console.log('3.  render()')
    return (
      <div>
        <Mod/>
        <Mod2 name='hello'/>
        { this.state.n }        
        <div onClick={ e=>this.setState({ n:this.state.n +1 }) }>변경</div>
      </div>
    )
  }
  // 4. 컴포넌트가 화면에 보였다. 마운트 되었다
  componentDidMount () {
    console.log('4.  componentDidMount()')
  }
  // -------------------------------------------------
  // 프로퍼티(props, state) 변경 주기
  componentWillReceiveProps () {
    console.log('1. 프로퍼티 : componentWillReceiveProps() ')
  }
  shouldComponentUpdate( nextProps, nextState ) {
    console.log('2. 프로퍼티 : shouldComponentUpdate() ' 
                + `nextState:${nextState.n}/${this.state.n}`)
    return true
  }
  componentWillUpdate () {
    console.log('3. 프로퍼티 : componentWillUpdate() ')
  }
  componentDidUpdate () {
    // 최소 변경된 state 값은 render() 함수 이후에 사용해야 원하는
    // 값을 사용할수 있다
    // 여기가 실제로 상태값이 변경된 지점(변경확정)
    console.log('4. 프로퍼티-변경확정 : componentDidUpdate() ')
  }
  // --------------------------------------------------
  componentWillUnmount () {
    console.log('componentWillUnmount() 화면에서 제거될려고한다')
  }
}
