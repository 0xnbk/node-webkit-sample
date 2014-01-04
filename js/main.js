var fs = require('fs');

fs.readFile('./package.jsom', 'utf-8', function (error, contents) {
   document.write(contents);
});