const crypto = require('crypto');
const alogrithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
function encrypt(text) {
  const cipher = crypto.createCipheriv(alogrithm, key, iv);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted,
  };
}
function decrypt(encryptedData, ivHex) {
  const iv = Buffer.from(ivHex, 'hex');
  const dicipher = crypto.createDecipheriv(alogrithm, key, iv);
  let decrypted = dicipher.update(encryptedData, 'hex', 'utf-8');
  decrypted += dicipher.final('utf-8');
  return decrypted;
} 
console.log('Encrypted Data: ');
const sensitiveData = 'My credit card:4242 4242 4242 4242';
console.log('Orginal Data : ', sensitiveData);

const encryptedData = encrypt(sensitiveData);
console.log('Encrypted Data: ', encryptedData);
const decryptedData = decrypt(encryptedData.encryptedData, encryptedData.iv);
console.log('Decrypted Data: ', decryptedData);
