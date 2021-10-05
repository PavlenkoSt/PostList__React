import React from 'react'
import { useHistory } from 'react-router'

const PostItem = ({ post, deletePost, id }) => {

    const deleteHandler = (e) => {
        e.stopPropagation()
        deletePost(post.id)
    }

    const history = useHistory()

    return (
        <div className='post' onClick={ () => history.push(`/post/${id}`) } >
            <div className='postInfo'>
                <div>
                    <div>{ id }</div>
                    <strong>{ post.title }</strong>
                </div>
                <div>{ post.body }</div>
            </div>
            <button onClick={ deleteHandler } className='btn del-btn'>Delete</button>
        </div>
    )
}

export default PostItem
