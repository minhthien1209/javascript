const { readFile, writeFile, write } = require('fs')

console.log('start')
readFile('node 3.4/content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result.toString(result));
    const first = result
    readFile('node 3.4/content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            'node 3.4/content/result-async.txt',
            ` Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')