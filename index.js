var nanybar = require('nanybar');
var port = 1738;

function WebpackAnyBar(params) {
  if (params && params.port) {
    port = params.port;
  }
}

WebpackAnyBar.prototype.compileMessage = function(stats) {
  var color = 'green';

  if (stats.hasWarnings()) {
    color = 'orange';
  }

  if (stats.hasErrors()) {
    color = 'red';
  }

  return color;
};

WebpackAnyBar.prototype.compilationDone = function(stats) {
  nanybar(this.compileMessage(stats), port);
};


WebpackAnyBar.prototype.apply = function(compiler) {
  if (process.platform == 'darwin') {
    compiler.plugin('done', this.compilationDone.bind(this));
  }
};

module.exports = WebpackAnyBar;
