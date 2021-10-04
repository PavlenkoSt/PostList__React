import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import router from './router'

const App = () => {
    return (
        <Switch>
            { router.map(route => (
                <Route path={ route.link } exact={ route.exact } >
                    { route.component() }
                </Route>
            )) }
            
            <Redirect to='/'/>
        </Switch>
    )
}

export default App
