const { writeFileSync, appendFileSync } = require('fs');
writeFileSync('node 3.4/content/big1.txt', 'thien');
for (var i = 0; i < 1000; i++) {
    appendFileSync('node 3.4/content/big1.txt', `Hello world ${i}\n`);
}