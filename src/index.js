import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
const App =() =>{
    return(
    
        
            <div className=" ui comments">
                <h3 className="ui dividing header">Comments</h3>
                
                <div className="comment">
                    
                        <a className="avatar">
                            <img alt="avatar" src={faker.image.nature()}/>
                             </a>
                        <div className ="content">
                            <a className="author">Matt</a>
                        
                        <div className="metadata">
                            <span className="date">Posted Today at 8am</span>
                        </div>
                        <div className="text">Nice Post!
                        </div>
                        </div>
                    </div>
                  <CommentDetail author="Suzan" date="Posted Today at 12am" text="Nice Post"/>
                  <CommentDetail author="Alex" date="Posted Today at 12pm" text="amazing"/>
                  <CommentDetail author="Ray" date="Posted Today at 9am" text="Wow wonderful"/>

                    
                </div>
            
        

    
    );
}
    ReactDOM.render(<App/>,document.getElementById('root'))

