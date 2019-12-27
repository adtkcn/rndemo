import axios from "axios";

let defaultConfig = {
	baseURL: "https://adtk.cn/"
	// baseURL: "http://dev.mychaochao.cn/dtudemo/db/" || process.env.apiUrl || ""
	// baseURL: process.env.baseURL || process.env.apiUrl || ""
	// timeout: 60 * 1000, // Timeout
	// withCredentials: true, // Check cross-site Access-Control
};

export function creactAxios(costomConfig = {}) {
	var config = {
		...costomConfig,
		...defaultConfig
	}
	console.log(config);

	const _axios = axios.create(config);

	// 请求拦截
	_axios.interceptors.request.use(
		function (config) {
			// 在发送请求之前做些什么 
			return config;
		},
		function (error) {
			// 对请求错误做些什么 
			return Promise.reject(error);
		}
	);

	//   响应拦截
	_axios.interceptors.response.use(
		function (response) {
			var randomColor = `rgba(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;

			console.log("%c┍---------------------------", `color:${randomColor};`);
			console.log("| 请求地址：", response.config.url);
			console.log("| 请求参数：", response.config.data);
			console.log("| 返回数据：", response.data);
			console.log("%c┕---------------------------",
				`color:${randomColor};`
			);
			if (response.data.errno == 0) {
				console.log("%ctips:检测请求路径,协议，cmd", 'color:red')
			}
			return response.data;
		},
		function (err) {
			return Promise.reject(err);
		}
	)
	return _axios
}

export let http = creactAxios();

// export default {
// 	creactAxios,
// 	http: creactAxios()
// };
