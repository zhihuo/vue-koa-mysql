import axios from './axios'
// import axios from './http'

export default async(url, params = {}, method = 'POST') => {
	method = method.toUpperCase();
	if (method === 'GET') {
		const res = await axios.get(url, {
			params
		});
		return res
	}else if(method === 'POST') {
		const res = await axios.post(url, params);
		return res
	}
}