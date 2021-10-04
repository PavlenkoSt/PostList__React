import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, deletePost }) => {

    if(!posts.length){
        return <h2 className='title'>Posts not found!</h2>
    }

    return (
        <div className='postList'>
            <h2 className='title'>Post List</h2>
            { posts.map(post => <PostItem post={ post } key={ post.id } deletePost={ deletePost } id={ post.id } />) }
        </div>
    )
}

export default PostList
