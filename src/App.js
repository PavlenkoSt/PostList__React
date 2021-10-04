import React, { useEffect, useState } from 'react'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

const App = () => {

    const [ authStatus, setAuthStatus ] = useState(false)

    useEffect(() => {
        const auth = localStorage.getItem('auth')
        if(auth){
            setAuthStatus(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App
