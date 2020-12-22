import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'

const CommentDetail=(props)=>{
    return(<div className="comment">
                    
    <a className="avatar">
        <img alt="avatar" src={faker.image.people()}/>
         </a>
    <div className ="content">
        <a className="author">{props.author}</a>
    
    <div className="metadata">
        <span className="date">{props.date}</span>
    </div>
    <div className="text">{props.text}
    </div>
    </div>
</div>)
}
export default CommentDetail