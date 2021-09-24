import React from 'react'
import { useState } from 'react/cjs/react.development'

const Form = ({ addPost, setShowModal }) => {
    
    const [ formPost, setFormPost ] = useState({ title: '', description: '' })

    const submitHandler = (e) => {
        e.preventDefault()
        addPost({ ...formPost, id: Date.now() })
        setShowModal(false)
    }

    return (
        <form>
            <input 
                type='text' 
                value={ formPost.title }
                onChange={ (e) => setFormPost({ ...formPost, title: e.target.value }) }
            />
            <input 
                type='text' 
                value={ formPost.description }
                onChange={ (e) => setFormPost({ ...formPost, description: e.target.value }) }
            />
            <button 
                onClick={ submitHandler } 
            >Add</button> 
        </form>
    )
}

export default Form
