import { useMemo, useState } from "react"


export const useSort = (posts) => {
    const [ sortVal, setSort ] = useState('')

    const sortedPosts = useMemo(() => {
        if(sortVal){
            return [...posts].sort((a, b) => a[sortVal]?.localeCompare(b[sortVal] ) )
        }

        return posts
    }, [sortVal, posts])

    return { sortedPosts, setSort, sortVal }
}

export const useSortAndSearch = (posts) => {
    const [ query, setQuery ] = useState('')

    const { sortedPosts, setSort, sortVal } = useSort(posts)

    const sortedAndQuered = useMemo(() => {
        return sortedPosts?.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [sortedPosts, query])

    return { sortedAndQuered, setQuery, setSort, query, sortVal }
}