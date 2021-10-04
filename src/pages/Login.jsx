import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../context'

const Login = () => {

    const { setAuthStatus } = useContext(AuthContext)

    return (
        <form className='form login' >
            <h2 className='title'>Login</h2>
            <input 
                type='text' 
                className='formInput'
                placeholder='Title'
            />
            <input 
                type='password' 
                className='formInput'
                placeholder='Body'
            />
            <button 
                className='btn formBtn'
                onClick={ () => setAuthStatus(true) } 
            >Login</button>  
        </form>
    )
}

export default Login
