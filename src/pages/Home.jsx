import React, { useEffect, useRef, useState } from 'react'
import postsAPI from '../api/postsAPI'
import Filter from '../components/Filter'
import Form from '../components/Form'
import Modal from '../components/Modal'
import PostList from '../components/PostList'
import { useFetch } from '../hooks/useFetch'
import { useSortAndSearch } from '../hooks/useFilter'
import useObserver from '../hooks/useObserver'
import usePagination from '../hooks/usePagination'

const Home = () => {

    const [ posts, setPosts ] = useState([])

    const [ showModal, setShowModal ] = useState(false)

    const { sortedAndQuered, setQuery, setSort, query, sortVal } = useSortAndSearch(posts)

    const { pagination, currentPortion, setTotalCount, limit, setCurrentPortion, totalCount } = usePagination()

    const [ fetchPosts, isLoading, fetchError ] = useFetch( async () => {
        const fetchedPosts = await postsAPI.getAll(limit, currentPortion)
        setPosts([...posts, ...fetchedPosts.data])
        setTotalCount(fetchedPosts.headers['x-total-count'])
    })

    const lastElement = useRef()

    useObserver(lastElement, isLoading, currentPortion < totalCount, () => setCurrentPortion(currentPortion + 1))

    useEffect(() => {
        fetchPosts()
    }, [currentPortion])

    const deletePost = (id) => setPosts(posts.filter(post => post.id !== id))
    const addPost = (newPost) => setPosts([ ...posts, newPost ])

    return (
        <div>
            <Filter 
                setSort={setSort}
                setQuery={setQuery}
                query={query}
                sortVal={sortVal}
            />
            { fetchError && <h2 className='title'>{ fetchError }</h2> }
            { isLoading && <h2 className='title'>Loading...</h2> }
            <PostList 
                posts={sortedAndQuered} 
                deletePost={deletePost}
            />
            <div ref={ lastElement } />
            { pagination }
            <button 
                className='btn addPostBtn'
                onClick={ () => setShowModal(true) }
            >Add new post</button>

            <Modal showModal={ showModal } setShowModal={ setShowModal } >
                <Form 
                    addPost={ addPost }
                    setShowModal={ setShowModal }
                />
            </Modal>
        </div>
    )
}

export default Home
