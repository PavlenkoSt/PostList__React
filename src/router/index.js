import Home from "../pages/Home"
import Login from "../pages/Login"
import Post from "../pages/Post"

const router = {
    auth: [
        { link: '/', component: Home, exact: true },
        { link: '/post/:id', component: Post, exact: true },
    ],
    noAuth: [
        { link: '/', component: Login, exact: true }
    ]
}

export default router