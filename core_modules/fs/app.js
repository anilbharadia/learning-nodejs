// fs = file system

var fs = require('fs');

fs.writeFileSync('cron.txt', 'cron is good, cron is life');

console.log(fs.readFileSync('cron.txt').toString());
