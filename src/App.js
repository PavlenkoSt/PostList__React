import React, { useState } from 'react'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

const App = () => {

    const [ authStatus, setAuthStatus ] = useState(false)

    return (
        <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App
