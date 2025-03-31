const crypto = require("crypto-js");

const my_password = 'hello';
const my_key = 'nuutoey';

//encode
const encode = crypto.AES.encrypt(my_password, my_key);
console.log('encode', encode.toString())

//decode
const decode = crypto.AES.decrypt(encode.toString(), my_key);
console.log('decode', decode.toString(crypto.enc.Utf8));