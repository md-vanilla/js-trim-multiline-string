# js-trim-multiline-string [![Build Status](https://travis-ci.org/sindresorhus/trim-left.svg?branch=master)](https://travis-ci.org/sindresorhus/trim-left)

multiline strings are a pain in javascript.

the most readable multiline string is as follows:

#### Expected Result:
```javascript
"
this
is
a
multiline
string
"
```

#### Before:

```javascript
const multilineStringExample = () => {
  const  stringConcatenation  = '' +
    'this ' +
    'is' +
    'a' +
    'multiline' +
    'string' +
    '';

  return stringConcatenation;
}
```

#### After:

```javascript
const multilineStringExample = () => {
  const taggedTemplate = mtrim `
    this
    is
    a
    multiline
    string
  `
  return taggedTemplate
}
```

## Install

```
$ npm install --save trim-multiline-string
```

## FullUsage, (Use the library as a Function, Tagged Template, Prototype Function), If Indent present keep Indent.!

```js
const { mtrim } = require('trim-multiline-string');
console.log(

  mtrim(str),

  mtrim(`str`),

  mtrim`
    check it out!
  `,

  mtrim
    `check it out!`,

  `str`.mtrim()

  `
   Keep Indent
   Implementation
   By Passing Number!
  `.mtrim(3)
)

```

## Related
- [`multiline`](https://github.com/sindresorhus/multiline) - Multiline string using anonymous function, and function call.
- [`trim-newlines`](https://github.com/sindresorhus/trim-newlines) - Similar to `String#trim()` but removes only newlines
- [`trim-right`](https://github.com/sindresorhus/trim-right) - Similar to `String#trim()` but removes only whitespace on the right
- [`trim-off-newlines`](https://github.com/stevemao/trim-off-newlines) - Similar to `String#trim()` but removes only newlines


## License

MIT © [michael_dimmitt](https://michaeldimmitt.github.io/michaeldimmitt/)

## Projects Using mtrim:
https://github.com/MichaelDimmitt/simp-js_term/blob/master/terminal.test.js
