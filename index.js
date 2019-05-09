function mTrim ( str ) {
  if ( Array.isArray(str) ) { str = str[0] }
  if ( ! str ) { str = this; }
  if ( str ) {
    return str.split( '\n' ).map(x => x.trim()).join('\n')
  }
}
String.prototype.mtrim = mTrim;
module.exports = String;
module.exports = { mtrim: mTrim };


