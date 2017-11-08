# bemor-latest-github

Get latest releases of a Github repository.

## install

```
npm i bemor-latest-github -S
```

## Usage

## ('auth/app')

`data` is an Object.

```js
const ls = require('bemor-latest-github');

lg('jgm/pandoc', (err, data) => {
	if (err) {
		return console.log(err);
	}
	console.log(data);
});

```

You will [get this](https://api.github.com/repos/jgm/pandoc/releases/latest) in an Object.

## list('auth/app')

`data` is an array.

```js
const ls = require('bemor-latest-github');

lg.list('jgm/pandoc', (err, data) => {
	if (err) {
		return console.log(err);
	}
	console.log(data);
});

```

You will get this :

```js
[ 'https://github.com/jgm/pandoc/releases/download/2.0.1.1/pandoc-2.0.1.1-1-amd64.deb',
  'https://github.com/jgm/pandoc/releases/download/2.0.1.1/pandoc-2.0.1.1-linux.tar.gz',
  'https://github.com/jgm/pandoc/releases/download/2.0.1.1/pandoc-2.0.1.1-macOS.pkg',
  'https://github.com/jgm/pandoc/releases/download/2.0.1.1/pandoc-2.0.1.1-windows.msi' ]
```

## Licence
MIT
