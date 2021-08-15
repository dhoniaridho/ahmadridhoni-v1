import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ahmadridhoni.vercel.app'
})

export default api