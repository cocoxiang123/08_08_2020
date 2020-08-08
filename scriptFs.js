const fs = require('fs')

// fs.readFile('./help.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("1", data.toString());
// })

// const file = fs.readFileSync('./help.txt');
// console.log("2", file.toString());

// fs.appendFile('./help.txt', 'this is so cool', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.writeFile('bye.txt', 'see you go', err => {
//     console.log(err);
// })
fs.unlink('bye.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('inception')
})