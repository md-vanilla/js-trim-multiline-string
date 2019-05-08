# trim-multiline-string [![Build Status](https://travis-ci.org/sindresorhus/trim-left.svg?branch=master)](https://travis-ci.org/sindresorhus/trim-left)

multiline strings are a pain in javascript.

the most readable multiline string is as follows: 
```javascript
 const str = ` this 
               is 
               a
               multiline
               string
             `
```

## Install

```
$ npm install --save trim-multiline-string
```

## Usage

```js
const { mtrim } = require('trim-multiline-string');
console.log({
  str: mtrim(str)
})
```

## Related
- [`trim-newlines`](https://github.com/sindresorhus/trim-newlines) - Similar to `String#trim()` but removes only newlines
- [`trim-right`](https://github.com/sindresorhus/trim-right) - Similar to `String#trim()` but removes only whitespace on the right
- [`trim-off-newlines`](https://github.com/stevemao/trim-off-newlines) - Similar to `String#trim()` but removes only newlines


## License

MIT © [michael_dimmitt](https://michaeldimmitt.github.io/michaeldimmitt/)

