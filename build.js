
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var rimraf = require('rimraf');
var babel = require("babel-core");
var svgToJSX = require('svg-to-jsx');
var snakeCase = require('change-case').snakeCase;
var pascalCase = require('change-case').pascalCase;
var emojis = require('emojione/emoji.json');
var template = require('lodash/template');
var indexArr = [];

function clean(callback) {
  console.log('Emptying dist directory...');
  rimraf('./dist/*', (err) => {
    if (err) throw err;
    callback();
  });
}

function readTemplate(templatePath, callback) {
  fs.readFile(templatePath, (err, templateContents) => {
    callback(template(templateContents, { imports: { '_': _ }}));
  });
}

function readSvgFile(unicode, callback) {
  fs.readFile('./node_modules/emojione/assets/svg/' + unicode + '.svg', (err, data) => {
    // if err file does not exist
    if (err) return;
    svgToJSX(data, function(error, jsx) {
      var toJS = babel.transform(jsx, { presets: ['react'] }).code;
      callback(toJS);
    });
  });
}

function writeReactComponent(data, filePath) {
  readTemplate('./templates/component.txt', (tmpl) => {
    fs.writeFile(filePath, tmpl(data), (err) => {
      if (err) throw err;
    });
  });
}

function pushToIndexArray(emojiName, filePath) {
  indexArr.push({
    name: emojiName,
    path: filePath
  });
}

function writeIndexFile() {
  console.log('Creating index file...');
  readTemplate('./templates/index.txt', (tmpl) => {
    fs.writeFile('./dist/index.js', tmpl({ emojis: indexArr }), (err) => {
      if (err) throw err;
    });
  });
}

function generateModule() {
  console.log('Generating React components...');
  _.forEach(emojis, function(emoji){
    var SVGFile;
    var CompiledReactComponent;
    var emojiName = snakeCase(emoji.shortname.split(':')[1]);
    var filePath = './dist/' + emojiName + '.js';
    var relativePath = './' + emojiName + '.js';

    readSvgFile(emoji.unicode, (data) => {
      writeReactComponent({ name: emojiName, contents: data }, filePath);
      pushToIndexArray(emojiName, relativePath);
    });

  });

  writeIndexFile();
}

clean(generateModule);
