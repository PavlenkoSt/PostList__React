import { useState } from "react"
import PostList from "./components/PostList"


const App = () => {
    const [ posts, setPosts ] = useState([
        { id: 0, title: 'Javascript', description: 'JS the best!' },
        { id: 1, title: 'Java', description: 'Java the best!' },
        { id: 2, title: 'Kotlin', description: 'Kotlin the best!' }
    ])

    return (
        <>
            <PostList posts={posts} />
        </>
    )
}

export default App