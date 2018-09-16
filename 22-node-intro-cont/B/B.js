const fs = require('fs');
const path = require("path");

let readable = fs.createReadStream(__dirname + '/1.text', { encoding: 'utf8', highWaterMark: 32*1024 });

let writeable = fs.createWriteStream("/home/max/Desktop" + '/1copy.txt');

readable.pipe(writeable);