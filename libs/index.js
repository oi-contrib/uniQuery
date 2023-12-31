import getLocation from "./getLocation";
import saveAlbum from "./saveAlbum";
import chooseImage from "./chooseImage";

// API
uni.$uniQuery = {
	getLocation,
	saveAlbum,
	chooseImage
};

// 参数
uni._uniQuery = {};

// 内置方法
let methods = {};

export default {
	install(Vue, options = {}) {
		if (Vue.prototype) {
			for (let key in methods) {
				Vue.prototype[key] = methods[key];
			}
		} else {
			Vue.mixin({
				methods
			});
		}

		uni._uniQuery.validate = options.validate || {};
	}
};