const test = require('ava');
const lg = require('../index.js');

test.cb('Get DL for jgm/pandoc.', t => {
	lg('jgm/pandoc', err => {
		if (err) {
			t.fail();
			t.end();
		} else {
			console.log('Lot of data here !');
			t.pass();
			t.end();
		}
	});
});

test.cb('Get list for jgm/pandoc.', t => {
	lg.list('jgm/pandoc', (err, data) => {
		if (err) {
			t.fail();
			t.end();
		} else {
			console.log(data);
			t.pass();
			t.end();
		}
	});
});
