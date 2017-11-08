const test = require('ava');
const lg = require('../index.js');

test.cb('Init test.', t => {
	t.pass();
	t.end();
});

test.cb('Get DL for jgm/pandoc.', t => {
	lg('jgm/pandoc', err => {
		if (err) {
			console.log(err);
			t.pass();
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
			console.log(err);
			t.pass();
			t.end();
		} else {
			console.log(data);
			t.pass();
			t.end();
		}
	});
});

test.cb('Get list for non existing repo.', t => {
	lg.list('arthurlacoste/xxxxx-dzkjn', err => {
		if (err) {
      // Not found
			console.log(err);
			t.pass();
			t.end();
		} else {
			t.fail();
			t.end();
		}
	});
});
