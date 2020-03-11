// 1. 필요한 모듈 가져오기
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyInput from './MyInput'
import MySelect from './MySelect'
import Net from './Net'
// import 대표모듈, {일반모듈} from '출처(써드파트패키지 or 내가만든js)'
import LifeCycle, {Mod3} from './LifeCycle'
import Map from './Map'
import * as serviceWorker from './serviceWorker';

// 2. 가상DOM에서 랜더링 수행 -> 메인 콤포넌트, html상 랜더링 위치
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<MyInput />, document.getElementById('root'));
//ReactDOM.render(<MySelect default='파이썬' items={ ['자바','자바스크립트','알','파이썬'] }/>, document.getElementById('root'));
// ReactDOM.render( <div>
//                     <LifeCycle />
//                     <Mod3/>
//                  </div> , document.getElementById('root'));
//ReactDOM.render(<Net />, document.getElementById('root'));

// html에서 리액트 컴포넌트 내부를 엑세스할수 있게 통로를 열어준다
ReactDOM.render(<Map data='1' ref={ (outCom)=>{ window.outCom=outCom } }/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
