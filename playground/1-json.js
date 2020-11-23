const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Jackson';
user.age = 27;

fs.writeFileSync('1-json.json', JSON.stringify(user));