import React from 'react'
import { Route, Switch } from 'react-router'
import Post from './pages/Post'
import PostsList from './pages/PostsList'

const App = () => {
    return (
        <Switch>
            <Route path='/post/:id'>
                <Post/>
            </Route>
            <Route path='/' exact>
                <PostsList/>
            </Route>
        </Switch>
    )
}

export default App
