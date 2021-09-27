import React from 'react'
import { useState } from 'react/cjs/react.development'

const Form = ({ addPost, setShowModal }) => {

    const [ formPost, setFormPost ] = useState({ title: '', body: '' })

    const submitHandler = (e) => {
        e.preventDefault()
        if(formPost.title || formPost.body){
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
                value={ formPost.body }
                onChange={ (e) => setFormPost({ ...formPost, body: e.target.value }) }
                className='formInput'
                placeholder='Body'
            />
            <button 
                className='btn formBtn'
                onClick={ submitHandler } 
            >Add</button> 
        </form>
    )
}

export default Form
