// Helper take current directory and move up one level

var path = require('path');
var _root = path.resolve(__dirname, '..'); 

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

exports.root = root;
