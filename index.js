var glob = require("glob");
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var tmplStr = 'module.exports = require(\'<%= file %>\');';
var tmpl = _.template(tmplStr);

module.exports = function (options) {
  var defaults = {
    dir: 'node_modules',
    out: 'node_modules'
  };
  options = _.defaults(options || {}, defaults);

  glob(options.dir + '/*/package.json', options.globOptions, function (err, files) {
    if (err) throw err;

    files.forEach(function (file) {
      var contents = fs.readFileSync(file, 'utf8');
      var pkg = JSON.parse(contents);
      var name = pkg.name;
      var main = pkg.main || 'index.js';

      var mainFile = file.replace(/package\.json$/, '') + '/' + main;

      var data = {
        file: './' + path.relative(options.out, mainFile)
      };

      var js = tmpl(data);
      var outFile = options.out + '/' + name + '.js';

      fs.writeFileSync(outFile, js);
    });
  });

};
