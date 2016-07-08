
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var rimraf = require('rimraf');
var pascalCase = require('change-case').pascalCase;
var emojis = require('emojione/emoji.json');
var template = require('lodash/template');

// Component Template
var componentTmpl = fs.readFileSync('./templates/component.txt');
var compiledComponentTmpl = template(componentTmpl);

// Index Template
var indexArr = [];
var indexTmpl = fs.readFileSync('./templates/index.txt');
var compiledIndexTmpl = template(indexTmpl, { imports: { '_': _ } });


function clean(callback) {
  console.log('Emptying dist directory...');
  rimraf('./dist/*', (err) => {
    if (err) throw err;
    callback();
  });
}

function readSvgFile(unicode, callback) {
  fs.readFile('./node_modules/emojione/assets/svg/' + unicode + '.svg', (err, data) => {
    // if err file does not exist
    if (err) return;
    callback(data.toString());
  });
}

function createCategoryDir(categoryName) {
  fs.mkdir('./dist/' + categoryName, (err) => {
    // if err, consider directory exists
    if (err) return;
  });
}

function writeReactComponent(data, filePath) {
  fs.writeFile(filePath, compiledComponentTmpl(data), (err) => {
    if (err) throw err;
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
  fs.writeFile('./dist/index.js', compiledIndexTmpl({ emojis: indexArr }), (err) => {
    if (err) throw err;
    console.log('Done!');
  });
}

function generateModule() {
  console.log('Generating React components...');
  _.forEach(emojis, function(emoji){
    var SVGFile;
    var CompiledReactComponent;
    var emojiName = emoji.shortname.split(':')[1];
    var filePath = './dist/' + path.join(emoji.category, emojiName) + '.js';
    var relativePath = './' + path.join(emoji.category, emojiName) + '.js';

    createCategoryDir(emoji.category);

    readSvgFile(emoji.unicode, (data) => {
      writeReactComponent({ name: emojiName, contents: data }, filePath);
    });

    pushToIndexArray(emojiName, relativePath);

  });

  writeIndexFile();
}

clean(generateModule);
