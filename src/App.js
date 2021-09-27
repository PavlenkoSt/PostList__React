import { useEffect, useState } from "react"
import PostList from "./components/PostList"
import Filter from "./components/Filter"
import { useSortAndSearch } from "./hooks/useFilter"
import Modal from "./components/Modal"
import Form from "./components/Form"
import { useFetch } from "./hooks/useFetch"
import postsApi from "./api/postsAPI"
import usePagination from "./hooks/usePagination"


const App = () => {
    const [ posts, setPosts ] = useState([])

    const [ showModal, setShowModal ] = useState(false)

    const { sortedAndQuered, setQuery, setSort, query, sortVal } = useSortAndSearch(posts)

    const { pagination, currentPortion, setTotalCount, limit } = usePagination()

    const { fetching, isLoading, error } = useFetch( async () => {
        const posts = await postsApi.getAll(limit, currentPortion)
        setPosts(posts.data)
        setTotalCount(posts.headers['x-total-count'])
    })

    useEffect(() => {
        fetching()
    }, [currentPortion])

    const deletePost = (id) => setPosts(posts.filter(post => post.id !== id))
    const addPost = (newPost) => setPosts([ ...posts, newPost ])

    return (
        <>
            <Filter 
                setSort={setSort}
                setQuery={setQuery}
                query={query}
                sortVal={sortVal}
            />
            { error && <h2 className='title'>{ error }</h2> }
            { isLoading 
                ? <h2 className='title'>Loading...</h2>
                : <PostList 
                    posts={sortedAndQuered} 
                    deletePost={deletePost}
                />
            }
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
        </>
    )
}

export default App