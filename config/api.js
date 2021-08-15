import axios from 'axios'

const api = axios.create({
    baseURL: 'https://dhoniaridho.netlify.app/',
    headers: {
        'Content-Type': 'application/json'
        }
})

export default api