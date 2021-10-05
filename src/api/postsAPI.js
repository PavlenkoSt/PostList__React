import axios from "axios"

const postsAPI = {
    async getAll(limit = 10, portion = 1){
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: portion
            }
        })
        return responce
    },
    async getOne(id){
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return responce
    },
    async getComments(id){
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return responce
    }
}

export default postsAPI