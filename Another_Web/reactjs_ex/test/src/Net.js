import React from 'react';
// 통신 모듈 가져오기
import request from 'superagent'

export default class Net extends React.Component
{
    constructor ( props ) {
        super(props)  
        let national = []
        national['EUR'] = 0
        national['JPY'] = 1
        national['USD'] = 2
        //console.log( national )
        //console.log( national['USD'] )
        this.state = {
            exchange:null   // 환율 정보
            ,cur:'USD'      // 기축통화 달러를 기본 환전 통화로 고정
            ,cur_rate:0     // 현재 환전 비율
            ,cur_won:0      // 한화
            ,cur_exch:0     // 통화별 금액(달러,엔화,유로화)
            ,national:national
        }  
        this.onExchangeName = this.onExchangeName.bind( this )   
    }
    componentWillMount () {
        // 화면이 보일려고 한다 => 이때 통신을 진행
        // 통신이 진행중일때는 => 화면에 환율정보조회중이라고 표시
        // 통신이 완료되면 => 환율 계산을 할수 있게 화면을 열어준다
        const url = 'http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json'
        request.get( url ).end( (err, res)=>{
            console.log( res.body )
            this.setState( { 
                exchange:res.body,
                // select 태그에서 통화를 변경하면 변경됨
                cur_rate:res.body[2].rate, // 1174.16
                // 사용자가 입력 or 반대쪽이 입력되거나 or 통화가 변경(원화고정)
                cur_won :1 * res.body[2].rate,
                cur_exch:1
            } )
            // 달러를 넣었을때 원화 계산
            // 달러입력 => x달러 * cur_rate:(원)
            //   원입력 => cur_rate/x원: (달러)
            // 달러 * cur_rate = 원
            // 달러 = 원/cur_rate            
            // 달러 * cur_rate/cur_rate = 원/cur_rate
            // 달러 * 1 = 원/cur_rate
            
        } )
    }
    onExchangeName ( e ) {
        console.log( e.target.value )
        // EUR:0, JPY:1, USD:2 각각 인덱스를 가지고 잇다
        // 통화 변경 -> 원화 고정 => 변경된 통화에의 rate를 이용하여
        let {exchange, cur_won, national} = this.state
        console.log( '변경된 통화의 비율', exchange[national[e.target.value]].rate )
        // 변경된 통화의 금액을 계산 반영
        this.setState( { 
            cur:e.target.value,
            cur_exch:cur_won/exchange[national[e.target.value]].rate,
            cur_rate:exchange[national[e.target.value]].rate          
        } )
    }
    render () {        
        let {exchange, cur, cur_won, cur_exch, cur_rate} = this.state
        if( exchange == null ){
            return <div>환율정보조회중</div>
        }
        // 통화 목록 출력
        let options = exchange.map( (item, idx)=>{
            //console.log(item.name.replace('KRW=X',''))
            let ex = item.name.replace('KRW=X','')
            return <option key={idx} value={ex}>{ex}</option>
        } )
        const onExchangeOther = (e)=>{
            // 숫자만 남는다, .은 정규식에 나중에 추가
            const v  = e.target.value.replace(/[^0-9]/g, '')
            this.setState( {
                cur_won:v * this.state.cur_rate,
                cur_exch:v
            } )
        }
        const onExchangeKorea = (e)=>{
            const v  = e.target.value.replace(/[^0-9]/g, '')
            // 원화 입력창에 숫자를 넣었다 
            this.setState( {
                cur_won:v,  // 원화입력
                cur_exch:v/this.state.cur_rate
            } )
        }
        return (<div>
            <h2>환율계산기</h2>
            <select value={ cur } onChange={ this.onExchangeName }>
                { options }
            </select><br/>
            <label>해외통화 {cur} </label><br/>
            <input type='text' onChange={ onExchangeOther } value={cur_exch} placeholder='해외통화' /><br/>
            <label>원화 </label><br/>
            <input type='text' onChange={ onExchangeKorea } value={cur_won} placeholder='원화' />
        </div>)
    }
}