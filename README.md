# trim-multiline-string [![Build Status](https://travis-ci.org/sindresorhus/trim-left.svg?branch=master)](https://travis-ci.org/sindresorhus/trim-left)

multiline strings are a pain in javascript.

mtrim - trim a multiline strings, a better way to make multiline strings.

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

#### Before mtrim:

```javascript
def multilineStringExample() {
  const  stringConcatenation  = '' +
    'this ' +
    'is' +
    'a' +
    'multiline' +
    'string' +
    '';
    
  const templateLiteral = `
this
is
a
multiline
string
`;

  return stringConcatenation;  
}
```

#### After (Option 1):

```javascript
def multilineStringExample() {
  const taggedTemplate = mtrim ` 
    this 
    is 
    a
    multiline
    string
  `
  return str
}
```

#### After (Option 2):

```javascript
def multilineStringExample() {
  const stringPrototype = ` 
    this 
    is 
    a
    multiline
    string
  `.mtrim
  return str
}
```

## Install

```
$ npm install --save trim-multiline-string
```

## FullUsage, (use the library as a Function, Tagged Template, Prototype Function)

```js
const { mtrim } = require('trim-multiline-string');
console.log(

  mtrim(str),

  mtrim(`str`),
  
  mtrim`check it out!`,
  
  `str`.mtrim
)

```

## Related
- [`multiline`](https://github.com/sindresorhus/multiline) - Multiline string using anonymous function, and function call.
- [`trim-newlines`](https://github.com/sindresorhus/trim-newlines) - Similar to `String#trim()` but removes only newlines
- [`trim-right`](https://github.com/sindresorhus/trim-right) - Similar to `String#trim()` but removes only whitespace on the right
- [`trim-off-newlines`](https://github.com/stevemao/trim-off-newlines) - Similar to `String#trim()` but removes only newlines


## License

MIT © [michael_dimmitt](https://michaeldimmitt.github.io/michaeldimmitt/)

