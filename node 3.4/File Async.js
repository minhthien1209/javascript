const CustomFS = require('fs');

CustomFS.readFileSync('node 3.4/content/first.txt', 'utf-8')
console.log('Finish read file 1');
CustomFS.readFileSync('node 3.4/content/second.txt', 'utf-8')
console.log('Finish read file 2');
console.log('done');