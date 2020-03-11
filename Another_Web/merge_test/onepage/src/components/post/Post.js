import React, {Component} from "react"
import './Post.css'
import './Ani.css'
import { CommentList } from "../";

// Post 컴포넌트로 전달된 props를 분해하여 전달 
// 함수형 => 클레스형 전환한다 : props나 state의 값변화에 대한 이벤트를 알아야 하므로
class Post extends Component { //= ({title, body, comments})=>{
    // props의 값들을 상태값에 저장하여 애니메이션을 제어
    constructor (props) {
        super(props)
        // 최초 전달글이 세팅
        this.state = {
            // 글
            post:{
                title:null,
                body:null,
                comments:[]
            },
            // 애니메이션 여부
            isAni:false,
            // 방향
            dir:'left'
        }
    }
    // 다음글 혹은 이전글에 대한 정보가 이쪽으로 전달
    componentWillReceiveProps (nextProps) {
        // 화면에 보여질 글정보를 처리한다
        const {title, body, comments} = nextProps
        // 애니메이션을 위한 처리 => 종료
        // 현재글과 다음에 들어오는 nextProps상에 글번호가 다르면 ok
        if( this.props.post_id != nextProps.post_id ){
            // 현재글<다음글 => 다음글 클릭 => right
            // 현재글>다음글 => 이전글 클릭 => left
            const dir = this.props.post_id < nextProps.post_id ? 'right' : 'left'
            // 상태 변화 => 현재 글박스가 사라진다
            this.setState( {
                dir,
                isAni:true
            } )
            // 새로운 글 표현하기
            setTimeout( ()=>{
                this.setState( {
                    post:{
                        title,
                        body,
                        comments
                    },
                    isAni:false
                } )
            }, 600)
            return
        }
        // 포스트 처리
        this.setState( {
            post:{
                title,
                body,
                comments
            }
        } )
    }
    render () {
        const {title, body, comments} = this.state.post
        // 최초에 아무런 글이 없을때 화면을 그리지 않는다
        if( title === null) return null
        // 글이 빠진다 ->  ..out..
        const ani_value = this.state.isAni ? 
                            (this.state.dir==='left' ? 'bounceOutLeft': 'bounceOutRight' ) 
                          : (this.state.dir==='left' ? 'bounceInRight': 'bounceInLeft')

        return (
            <div className={`Post animated ${ani_value}`}>
                <h2>{title}</h2>
                <span>
                {body}
                </span>
                {/*댓글리스트*/}
                <CommentList data={comments}/>
            </div>
        )
    }
}
export default Post