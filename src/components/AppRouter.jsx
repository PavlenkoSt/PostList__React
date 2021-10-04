import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../context'
import router from '../router'
import Navbar from './Navbar'

const AppRouter = () => {

    const { authStatus } = useContext(AuthContext)

    if(!authStatus){
        return (
            <Switch>
                { router.noAuth.map(route => (
                    <Route path={ route.link } exact={ route.exact } key={ route.link } component={ route.component } />
                )) }

                <Redirect to='/'/>
            </Switch>
        )
    }

    return (
        <>
            <Navbar/>
            <Switch>
                { router.auth.map(route => (
                    <Route path={ route.link } exact={ route.exact } key={ route.link } component={ route.component } />
                )) }
                
                <Redirect to='/'/>
            </Switch>
        </>
    )
}

export default AppRouter
