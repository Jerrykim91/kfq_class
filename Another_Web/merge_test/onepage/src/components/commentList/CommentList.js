import React from "react"
import './CommentList.css'
import { Comment } from "../";

const CommentList = ({data})=>{
    // 배열의 개수만큼 반복하여 Comment를 생성
    const comLists = data.map( (item, index)=>{
        return (
            <Comment email={item.email} body={item.body} key={index}/>
        )
    } )

    return (
        <ul className='CommentList'>
            {/* 댓글 리스트 표현하는 틀 */ }
            { comLists }
        </ul>
    )
}
export default CommentList