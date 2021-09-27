import { useMemo, useState } from "react/cjs/react.development"

const usePagination = () => {
    const [ pagination, setPagination ] = useState([])
    const [ currentPortion, setCurrentPortion ] = useState(1)
    const [ limit, setLimit ] = useState(10)
    const [ totalCount, setTotalCount] = useState(0)

    const clickHandler = (e) => setCurrentPortion(+e.target.innerText)

    useMemo(() => {
        const paginationCount = Math.ceil(totalCount / limit)
        const pag = []

        for(let i = 1; i <= paginationCount; i++){
            pag.push(i)
        }

        setPagination(
            <div className='pagContainer'>
                { 
                    pag.map(pagItem => <div 
                        key={ pagItem }
                        onClick={clickHandler}
                        className={ `pagItem ${ pagItem === currentPortion ? 'activePagItem' : ''}` }
                    >{ pagItem }</div>) 
                }
            </div>
        )

    }, [totalCount, limit, currentPortion])

    return { pagination, currentPortion, limit, setLimit, setTotalCount }
}

export default usePagination