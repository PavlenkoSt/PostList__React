import { useState } from "react"
import PostList from "./components/PostList"
import Filter from "./components/Filter"
import { useSortAndSearch } from "./hooks/useFilter"
import Modal from "./components/Modal"
import Form from "./components/Form"


const App = () => {
    const [ posts, setPosts ] = useState([
        { id: 0, title: 'a Javascript', description: 'JS the best!' },
        { id: 1, title: 'z Java', description: 'Java the best!' },
        { id: 2, title: 'w Kotlin', description: 'Kotlin the best!' }
    ])

    const [ showModal, setShowModal ] = useState(false)

    const { sortedAndQuered, setQuery, setSort, query, sortVal } = useSortAndSearch(posts)

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
            <PostList 
                posts={sortedAndQuered} 
                deletePost={deletePost}
            />
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