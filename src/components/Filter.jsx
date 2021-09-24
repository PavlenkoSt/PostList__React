import React from 'react'

const Filter = ({ setSort, sortVal, setQuery, query }) => {
    const selectChange = (e) => setSort(e.target.value)

    const inputChange = (e) => setQuery(e.target.value)

    return (
        <div className='filter'>
            <select onChange={ selectChange } value={ sortVal } className='sortSelect' >
                <option defaultValue defaultChecked value=''>Sort</option>
                <option value='title'>Sort by title</option>
                <option value='description'>Sort by description</option>
            </select>
            <input 
                type='text' 
                value={ query } 
                onChange={ inputChange } 
                className='searchInput'
                placeholder='search'
            />
        </div>
    )
}

export default Filter
