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

          alt-trimmed: ${mtrim(example)}

  `
)

console.log(
  'example0: '+mtrim(example),
  "\n\n"+'example1: '+"\n\n"+mtrim(example),
  "\n\n"+'example2: '+"\n\n"+example.mtrim()
)

console.log(
  mtrim`     example3
  this
     is
       a
   multiline
     string
  `
)
// not supported: console.log( mtrim`{example}` )
