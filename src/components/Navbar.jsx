import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../context'

const Navbar = () => {

    const { setAuthStatus } = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem('auth')
        setAuthStatus(false)
    }

    return (
        <div className='navbar'>
            <button className='btn btn-big' onClick={ logout }>Logout</button>
        </div>
    )
}

export default Navbar
