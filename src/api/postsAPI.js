import axios from "axios"

const postsAPI = {
    async getAll(){
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        return responce.data
    }
}

export default postsAPI