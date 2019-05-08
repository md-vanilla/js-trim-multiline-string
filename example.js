const { mtrim } = require('./index.js');
const example = ` 
  this
  is
    a
multiline
  string
`

console.log(
  `
          example: ${example}

          trimmed: ${example.mtrim()}
  `
)

