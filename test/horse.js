
const lg = require('../index.js');

lg.list('jgm/pandoc', (err, data) => {
	if (err) {
		return console.log(err);
	}
	console.log(data);
});
