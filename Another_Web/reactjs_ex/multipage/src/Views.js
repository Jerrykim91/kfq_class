import React from 'react';
import logo from './logo.svg';
import './Views.css';
// 라우트 처리 필요한 모듈
import {
    BrowserRouter, 
    Router, 
    Route, 
    Link, 
    Redirect
} from 'react-router-dom'

export default class View extends React.Component 
{
    render () {
        return ( 
            <BrowserRouter>
                {/* 순수 css를 그대로 사용할대는 className='이름' */}
                {/* exact 옵션을 부여하면 url 완전히 일치해야만 
                    해당 컴포넌트가 보인다 */}
                <div className='App'>
                    {/* 홈페이지 */}
                    <Route path='/' component={Home} exact/>
                </div>
            </BrowserRouter>
         )
    }
}
const Home = ()=>(<div>
    <h2>홈페이지</h2>
    <ul>
        <li><a href='/signin'>로그인</a></li>
        <li>회원가입</li>
        <li>메인서비스</li>
    </ul>
</div>)
