import axios from 'axios'

const api = axios.create({
    baseURL: 'http://ahmadridhoni.vercel.app'
})

export default api