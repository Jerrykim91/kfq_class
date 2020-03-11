// smart한 컴포넌트 => 클레스로 정의, state등 각종 이벤트들도 가지고 있다
import React, { Component } from "react";
import { PostingUI, PageNavigater, Post, Alert } from "../../components";
// 개별 모듈을 가다져와서 별칭을 부여
import * as net from "../../net/Net";

export default class PostingContainer extends Component 
{
    constructor (props) {
        super(props)
        // 상태값 초기화
        this.state = {
            // 현재글번호
            post_id:1,
            // 통신중 ~ 완료
            isLoading:false,
            // 글정보
            cur_post:{
                title:null,
                body:null
            },
            // 댓글정보
            cur_comments:[],
            // 알러트창 보이는 플레그변수
            alertVisiable:false
        }
    }
    render () {
        // 값찍기가 복잡할 경우 : this.state를 구조 분해 하여 변수로 간단하게 사용 가능
        return (
            <PostingUI sub='hi'>
                {/*원문글*/}
                <Post title={this.state.cur_post.title} 
                      body={this.state.cur_post.body} 
                      comments={this.state.cur_comments}
                      post_id={this.state.post_id}/>
                {/* 페이지이동 처리(글 이동처리) */}
                <PageNavigater page={this.state.post_id} onClick={this.movePage}/>
                {/* 페이지 마지막이나 처음일때 다음 글 이전글 요청하면 발동 */}
                <Alert msg='더이상 글이 없습니다.' visiable={this.state.alertVisiable}/>
            </PostingUI>
        )
    }
    // 페이지 이동(이전페이지, 다음페이지 요청)
    // 요청 했는데 데이터가 없다 => 목록의 끝으로 간주
    movePage = dir => {
        if (dir === -1) {  // 이전 페이지
            this.fetchPost( this.state.post_id - 1 )
        }else{             // 다음 페이지
            this.fetchPost( this.state.post_id + 1 )
        }
    }
    // 통신함수 생성 => 비동기 응답에 대한 조치 => 조금있다 응답이 온다
    // 애로우 함수로 맴버 함수를 정의하면 this 바인딩을 바벨에서 자동으로 해줌
    // async ~ await => 제너레이터로 변환 (바벨에서 진행)
    fetchPost = async post_id => {
        // 통신이 끝난다음에 다음 통신이 진행되므로, 전체 소요시간은 개별 통신시간의 합이 된다
        //const post     = await net.getPost( post_id )
        //console.log( '원문글', post )
        //const comments = await net.getComments( post_id )
        //console.log( '댓글', comments )
        // 통신을 동시에 진행하고, 가장 오래  걸리는 부분이 전체 통신 시간으로 가는게 합리적임
        // promise를 동시에 진행되고, 추가된 순서대로 결과가 세팅되는 promise.all를 사용
        
        // 통신 시작
        this.setState( {isLoading:true} )
        try{
            // 통신
            const post = await Promise.all( [
                net.getPost( post_id ),
                net.getComments( post_id )
            ] )
            console.log( '결과', post )
            // 객체 구조 분해를 통해 맴버값 획득
            const { title, body } = post[0].data
            // 통신 결과를 상태값에 저장
            this.setState( {
                post_id:post_id,
                cur_post:{
                    title,
                    body
                },
                cur_comments:post[1].data,
                // 통신 끝
                isLoading:false
            } )
        }catch(e){
            this.setState( {
                isLoading:false,
                // 경고창 보이기
                alertVisiable:true
            } )
            // 경고창 닫기
            setTimeout(()=>{
                this.setState( {alertVisiable:false} )
            }, 1000*1)
        }
    } 
    componentDidMount ()
    {
        // 서버로부터 데이터 가져오기 => 기능확인 => 통신모듈화 진행 
        // => 어디서는 편하게 사용하게 패턴
        this.fetchPost(1)
    }
}