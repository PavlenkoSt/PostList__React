import { useMemo, useState } from "react"


export const useSort = (posts) => {
    const [ sortVal, setSort ] = useState('')

    const sortedPosts = useMemo(() => {
        if(sortVal){
            return [...posts].sort((a, b) => a[sortVal]?.localeCompare(b[sortVal] ) )
        }

        return posts
    }, [sortVal, posts])

    return { sortedPosts, setSort}
}