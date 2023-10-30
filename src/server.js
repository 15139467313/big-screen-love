import axios from 'axios'

const server = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // baseURL会自动加在请求地址上
    // timeout: 3000
})
export default server