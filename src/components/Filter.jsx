import React from 'react'

const Filter = ({ setSort }) => {
    const selectChange = (e) => setSort(e.target.value)

    return (
        <>
            <select onChange={selectChange}>
                <option defaultValue defaultChecked value=''>Sort</option>
                <option value='title'>Sort by title</option>
                <option value='description'>Sort by description</option>
            </select>
        </>
    )
}

export default Filter
