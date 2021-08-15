import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ahmadridhoni.vercel.app',
    headers: {
        'Content-Type': 'application/json'
        }
})

export default api