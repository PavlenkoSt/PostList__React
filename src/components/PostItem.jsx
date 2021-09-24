import React from 'react'

const PostItem = ({ post, deletePost }) => {
    return (
        <div className='post'>
            <div className='postInfo'>
                <div>
                    <strong>{ post.title }</strong>
                </div>
                <div>{ post.description }</div>
            </div>
            <button onClick={() => deletePost(post.id)} className='btn'>Delete</button>
        </div>
    )
}

export default PostItem
