import React from 'react'

const PostItem = ({ post, deletePost, id }) => {
    return (
        <div className='post'>
            <div className='postInfo'>
                <div>
                    <div>{ id }</div>
                    <strong>{ post.title }</strong>
                </div>
                <div>{ post.body }</div>
            </div>
            <button onClick={() => deletePost(post.id)} className='btn'>Delete</button>
        </div>
    )
}

export default PostItem
