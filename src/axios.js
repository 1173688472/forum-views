import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // timeout: 1000,
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data.data;
}, function (error) {
    // 对响应错误做点什么

    return Promise.reject(error);
});



export default service