import React from 'react';
// 통신 모듈 가져오기
import request from 'superagent'

export default class Map extends React.Component
{
    constructor ( props ) {
        super(props)
        this.state = {
            lat:0,      // 검색어의 위치(위도)
            lng:0,      // 검색어의 위치(경도)
            keyword:''  // 검색어(로컬)
            ,results:null
            ,isNetework:false // t:통신중, f:통신종료
        }
    }
    htmlCall ( lat, lng ) {
        // 지도가 로드되고 지도의 센터 좌표가 전달되면        
        //this.setState( {lat:lat, lng:lng} )
        // 컴포넌트의 일반적인 맴버변수로 추가-> 불필요한 화면갱신X
        this.lat = lat
        this.lng = lng
        console.log( this.lat, this.lng )
    }
    render () {
        // 검색어를 넣으면 상태변수 갱신->화면갱신->검색어는 상태변수에저장
        const onSearch = (e)=>{
            console.log( e.target.value )
            this.setState( { keyword:e.target.value } )
        }
        const onNetwork = (e)=>{
            this.setState( {
                isNetework:true
            } )
            // 통신 진행
            console.log( this.lat, this.lng, this.state.keyword )
            let url = `https://dapi.kakao.com/v2/local/search/keyword.json?y=${this.lat}&x=${this.lng}&radius=500&query=${this.state.keyword}`
            request
            .get( url )
            .set('Authorization','KakaoAK e34bb81e2e35e85ca6efee410badd670')
            .end( (err, res)=>{
                //console.log( res.body )
                // 1. 검색 결과 화면 처리
                window.addMarker( res.body )
                // 2. html 상 지도로 전달하여 화면처리
                this.setState( { 
                    results:res.body,
                    isNetework:false
                 } )
            } )
        }
        // 통신결과중 배열(documents 항목)을 반복하면서 하나씩 빼서 
        // 콜백함수에 넣어서 호출 => map()
        let results = ''
        if( this.state.results != null ){
            results = this.state.results.documents.map( (item, idx)=>{
                return <li key={idx}>{ item.place_name}</li>
            } )
        }
        return (<div>
            <input type='text' onChange={ onSearch } 
            value={this.state.keyword} placeholder='검색어'/>
            <button onClick={ onNetwork }>검색</button>
            <div> { this.state.isNetework ? '통신중' : ''} </div>
            <ul>
                { results }
            </ul>
        </div>)
    }
}