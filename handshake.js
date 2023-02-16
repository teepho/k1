var reqWsKey = "rLympQhy9lpy9dMsahSRQQ==";

var crypto = require('crypto')
var shasum = crypto.createHash('sha1')
shasum.update(reqWsKey + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11');

console.log(shasum.digest('base64'))
