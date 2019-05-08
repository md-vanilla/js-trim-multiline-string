
export const mtrim = (str) => str.split( '\n' ).map(x => x.trim()).join('\n')

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

          trimmed: ${mtrim(example)}
  `
)
