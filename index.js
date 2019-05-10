function mTrim ( str ) { // parameter is for the exporting mtrim function.
  if ( Array.isArray(str) ) { str = str[0] } // for tagged template implementation.
  if ( ! str ) { str = this; } // for prototype implementation.
  if ( str ) {
    return str.split( '\n' ).map(x => x.trim()).join('\n')
  }
}
String.prototype.mtrim = mTrim;
module.exports = String;
module.exports = { mtrim: mTrim };


