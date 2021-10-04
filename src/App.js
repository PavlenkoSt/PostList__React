import React, { useEffect, useState } from 'react'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

const App = () => {

    const [ authStatus, setAuthStatus ] = useState(false)
    const [ loadingStatus, setLoadingStatus ] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setAuthStatus(true)
        }
        setLoadingStatus(false)
    }, [])

    return (
        <AuthContext.Provider value={{ authStatus, setAuthStatus, loadingStatus }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App
