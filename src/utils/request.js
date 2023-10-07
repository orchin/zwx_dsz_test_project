import axios from "axios";
import { message } from 'ant-design-vue'

//创建实例
const serviceAxios = axios.create({
	baseURL: 'https://services.dev.dropshipzone.com.au/api/dsz-api/', // 基础请求地址
	// baseURL: 'https://api.dropshipzone.com.au/',
	timeout: 10000, // 请求超时设置
	withCredentials: true, // 跨域请求是否需要携带 cookie
	headers: {
		"content-type": "application/json",
	},
});

//请求拦截
serviceAxios.interceptors.request.use(function (config) {
	// 发请求带token
	let token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = 'jwt ' + token;
	}
	return config;
}, function (error) {
	// 请求错误
	return Promise.reject(error);
});
//响应拦截
serviceAxios.interceptors.response.use(function (response) {
	// 访问成功时执行
	// 如果有response.data.code说明有错误, 显示message
	if (response.data.code) {
		message.error(response.data.message)
	}
	return response;
}, function (error) {
	// 访问失败时执行
	let errMsg = error.message
	if (error.response && error.response.data && error.response.data.message) errMsg = error.response.data.message
	message.error(errMsg)
	return Promise.reject(error);
});


export default serviceAxios;