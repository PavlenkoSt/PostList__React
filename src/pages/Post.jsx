import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import postsAPI from '../api/postsAPI'
import CommentsList from '../components/CommentsList'
import { useFetch } from '../hooks/useFetch'

const Post = ({ match }) => {

    const [ post, setPost ] = useState({})
    const [ comments, setComments ] = useState([])

    const id = match.params.id

    const [ fetchPost, isLoading, error ] = useFetch(async () => {
        const responce = await postsAPI.getOne(id) 
        setPost(responce.data)

        const comments = await postsAPI.getComments(id)
        setComments(comments.data)
    })

    useEffect(() => {
        fetchPost()
    }, [id])

    if(isLoading) return <h2 className='title'>Loading...</h2>
    if(error) return <h2 className='title'>{ error }</h2>

    return (
        <>
            <div className='link'>
                <NavLink to='/' >Back to list</NavLink>
            </div>
            <div className='post-page'>
                <h2 className='title'>Post Info</h2>
                <div className='title' >{ post.title }</div>
                <div>{ post.body }</div>
            </div>
            <CommentsList comments={ comments } />
        </>
    )
}

export default Post