import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcGV0c2hvcC5sb2NhbCIsInJvbGUiOiJhZG1pbiIsIm5hbWUiOiJBZG1pbmlzdHJhZG9yIiwiaWF0IjoxNzc4NzE0MDAyLCJleHAiOjE3Nzg4MDA0MDJ9.61edhcd_59hsfc0TUu9ws4iVfGppA5sMfVOjvLkV1Yk'

api.interceptors.request.use((config) => {
    if (TOKEN) {
        config.headers.Authorization = `Bearer ${TOKEN}`
    }
    return config
})

export default api