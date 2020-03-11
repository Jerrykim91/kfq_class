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
                <div className='App'>  
                    <Header />
                    <div style={ {margin:10} }>
                        <Route path='/' component={Home} exact/>                    
                        <Route path='/signin' component={Signin} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/main' component={Main} />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
         )
    }
}
// css
const common = {
    backgroundColor:'lightgray',
    color:'Blue',
    padding:'0.5em'
}
const Header = ()=>(
    <div style={common}>
        <h1>공통헤더</h1>
    </div>
)
const Footer = ()=>(
    <div style={common}>
        <h1>공통푸터(모든 화면에 등장)</h1>
    </div>
)
const Home = ()=>(<div>
    <h2>홈페이지</h2>
    <ul>
        <li><a href='/signin'>로그인</a></li>
        <li><Link to='/signup'>회원가입</Link></li>
        <li><Link to='/main'>메인서비스</Link></li>
    </ul>
</div>)

const Signin = ()=>(
    <div>
        <h2>로그인페이지</h2>        
    </div>
)
const Signup = ()=>(
    <div>
        <h2>회원가입</h2>        
    </div>
)
const Main = ()=>(
    <div>
        <h2>메인서비스</h2>        
    </div>
)

