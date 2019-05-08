
const mtrim = (str) => str.split( '\n' ).map(x => x.trim()).join('\n');
module.exports = { mtrim };

const example = ` 
  this
  is
    a
multiline
  string
`;

console.log(
  `
          example: ${example}

          trimmed: ${mtrim(example)}
  `
);
