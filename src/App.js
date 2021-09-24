import { useState } from "react"
import PostList from "./components/PostList"
import Filter from "./components/Filter"
import { useSortAndSearch } from "./hooks/useFilter"


const App = () => {
    const [ posts, setPosts ] = useState([
        { id: 0, title: 'a Javascript', description: 'JS the best!' },
        { id: 1, title: 'z Java', description: 'Java the best!' },
        { id: 2, title: 'w Kotlin', description: 'Kotlin the best!' }
    ])

    const { sortedAndQuered, setQuery, setSort, query, sortVal } = useSortAndSearch(posts)

    return (
        <>
            <Filter 
                setSort={setSort}
                setQuery={setQuery}
                query={query}
                sortVal={sortVal}
            />
            <PostList posts={sortedAndQuered} />
        </>
    )
}

export default App