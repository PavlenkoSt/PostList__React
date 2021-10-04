import Home from "../pages/Home"
import Post from "../pages/Post"

const router = [
    { link: '/', component: Home, exact: true },
    { link: '/post/:id', component: Post, exact: true },
]

export default router