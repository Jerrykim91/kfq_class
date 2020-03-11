import React from 'react';
import logo from './logo.svg';
import './Views.css';
// 라우트 처리 필요한 모듈
import {
    BrowserRouter, 
    Router, 
    Route, 
    Link, 
    Redirect,
    Switch
} from 'react-router-dom'

// 동적 파라미터 형태로 페이간 데이터를 전달할수 있다
// /news/:id/:date => /news/kop/132213123412
const data = [
    { id:'kop',    title:'BTS'    },
    { id:'kdrama', title:'시그널' },
    { id:'it제품', title:'TV'     }
]

export default class View extends React.Component 
{
    render () {
        return ( 
            <BrowserRouter>       
                { /* Switch는 사용할경우 path 가 없는 라우트가 기본페이지, 홈페이지 */}         
                <div className='App'>  
                    <Switch>
                        <Route component={Detail} path='/info/:id'/>
                        <Route component={Home} />
                    </Switch>
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
class Home extends React.Component {
    render () {
        const list = data.map( (item, idx)=>{
            {/* /info/item의 id값 */}
            return <li key={idx}><Link to={ `/info/${item.id}` }>{item.title}</Link></li>
        } )
        return (
            <div>
                <ul>
                    { list }
                </ul>
            </div>
        )
    }
}

const Signin = ()=>(<div>
        <h2>로그인페이지</h2>        
    </div>
)
const Signup = ()=>(<div>
        <h2>회원가입</h2>        
    </div>
)
const Main = ()=>(<div>
        <h2>메인서비스</h2>        
    </div>
)
class Detail extends React.Component {
    render (){
        // 데이터 추출
        let {id} = this.props.match.params
        // 전체데이터 => data에서 특정조건이 일치되는 데이터만 추출
        // filter()
        const detail = data.filter( item=>item.id === id )
        console.log( detail )
        return (<div>
            <h2>메인서비스{ id }/{detail[0].title}</h2>        
        </div>
        )
    }
}
