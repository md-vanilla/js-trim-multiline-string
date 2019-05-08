function mTrim ( str ) {
  if ( ! str ) { str = this; }
  return str.split( '\n' ).map(x => x.trim()).join('\n')
}
String.prototype.mtrim = mTrim;
module.exports = String;
module.exports = { mtrim: mTrim };

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

          trimmed: ${example.mtrim()}
  `
);
