// Bemor Latest Github release
const request = require('request');

console.log();

const listDownloads = function (data, cb) {
	const allDL = [];
	for (const index in data.assets) {
		if (Object.prototype.hasOwnProperty.call(data.assets, index)) {
			const current = data.assets[index].browser_download_url;
			allDL.push(current);
		}
	}
	cb(null, allDL);
};

const req = function (apprepo, cb) {
	const latest = `https://api.github.com/repos/${apprepo}/releases/latest`;
	request({
		url: latest,
		json: true,
		headers: {
			'User-Agent': 'request (arthurlacoste/bemor-latest-github)'
		}
	}, (err, response, body) => {
		if (err) {
			return cb(err);
		}

		if (!err && response.statusCode === 200) {
			cb(null, body);
		}
	});
};

const list = function (apprepo, cb) {
	req(apprepo, (err, data) => {
		if (err) {
			return cb(err);
		}
		listDownloads(data, cb);
	});
};

module.exports = req;
module.exports.list = list;
