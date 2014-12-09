# github-deps
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

## Information

<table>
<tr>
<td>Package</td>
<td>github-deps</td>
</tr>
<tr>
<td>Description</td>
<td>Get and check npm dependencies from github URLs</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>


## Install

```sh
  npm install github-deps
```

## Example

```js

var gdeps = require('github-deps');

var url = 'https://github.com/stevelacy/github-deps/blob/master/test/fixtures/pkg.json'

gdeps(url, {}, function(err, data){
  // => { name: 'project', deps: { mocha: { update: '2.0.1', current: '^1.1.0' } } }
});

```


## API

```js
githubDeps(<String> <Array>, {<options>}, function(err, data){

});
```
All options are passed to [rawgithub](https://github.com/stevelacy/rawgithub)


## License [MIT](LICENSE)



[npm-url]: https://npmjs.org/package/github-deps
[npm-image]: http://img.shields.io/npm/v/github-deps.svg

[travis-url]: https://travis-ci.org/stevelacy/github-deps
[travis-image]: https://travis-ci.org/stevelacy/github-deps.png?branch=master