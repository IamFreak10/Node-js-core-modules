const path = require('path');
console.log('Current file Info: \n');
console.log('File Name: ', __filename);
console.log('Directory Name: ', __dirname);
console.log('\n' + '-'.repeat(50) + '\n');

const filePath = '/mahfuj/documents/nextlevel.pdf';
console.log('Analyzing Path: ', filePath, '\n');
console.log('Directory: ', path.dirname(filePath));
console.log('Base Name: ', path.basename(filePath));
console.log('File Extension: ', path.extname(filePath));
console.log('File Name: ', path.basename(filePath, path.extname(filePath)));
console.log('\n' + '-'.repeat(50) + '\n');
const parsed = path.parse(filePath);
console.log('Parsed Path Object: ', parsed);
console.log('\n' + '-'.repeat(50) + '\n');
console.log('Formatted Path: ', path.format(parsed));
