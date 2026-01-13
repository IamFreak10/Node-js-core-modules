//
const crypto = require('crypto');
console.log('\n MD5 Hash: ');
const md5Hash = crypto.createHash('md5').update('password123').digest('hex'); //Not recommended
const md5Hash2 = crypto.createHash('md5').update('password123').digest('hex'); //Not recommended
console.log('Input: pasword123');
console.log('Md5 Hased Password: ', md5Hash);
console.log('Md5 Hased Password: ', md5Hash2);
const sha256Hash=crypto.createHash('sha256').update('password123').digest('hex');
console.log('\n SHA256 Hash: ');
console.log('Input: pasword123');
console.log('SHA256 Hased Password: ', sha256Hash);
const sha512Hash=crypto.createHash('sha512').update('password123').digest('hex');
console.log('\n SHA512 Hash: ');
console.log('Input: pasword123');
console.log('SHA512 Hased Password: ', sha512Hash);



