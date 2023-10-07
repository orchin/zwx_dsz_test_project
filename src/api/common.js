import request from '@/utils/request.js'

const Apis = {
	//获取token
	getAuth(data){
		return request({
			method: 'post',
			url: 'auth',
			data: data,
		});
	},
	//获取分类
	getAllCategory(params){
		return request({
			method: 'get',
			url: 'category',
			params: params,
		});
	},
	//获取产品
	getAllProducts(params){
		return request({
			method: 'get',
			url: 'products',
			params: params,
		});
	},
}

export default Apis