import React from 'react'
import { useState } from 'react/cjs/react.development'

const Form = ({ addPost, setShowModal }) => {

    const [ formPost, setFormPost ] = useState({ title: '', description: '' })

    const submitHandler = (e) => {
        e.preventDefault()
        if(formPost.title || formPost.description){
            addPost({ ...formPost, id: Date.now() })
            setShowModal(false)
        }
    }

    return (
        <form className='form' >
            <h2 className='title'>Add new post</h2>
            <input 
                type='text' 
                value={ formPost.title }
                onChange={ (e) => setFormPost({ ...formPost, title: e.target.value }) }
                className='formInput'
                placeholder='Title'
            />
            <input 
                type='text' 
                value={ formPost.description }
                onChange={ (e) => setFormPost({ ...formPost, description: e.target.value }) }
                className='formInput'
                placeholder='Description'
            />
            <button 
                className='btn formBtn'
                onClick={ submitHandler } 
            >Add</button> 
        </form>
    )
}

export default Form
