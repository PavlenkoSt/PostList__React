import React from 'react'

const CommentsList = ({ comments }) => {

    return (
        <div className='comments'>
            <h2 className='title'>Post comments</h2>
            { comments.map(comment => (
                <div key={ comment.id } className='comment' >
                    <div>Name: <strong>{ comment.name }</strong></div>
                    <div>Email: <strong>{ comment.email }</strong></div>
                    <div className='comment-body'>{ comment.body }</div>
                </div>
            )) }
        </div>
    )
}

export default CommentsList
