const fs=require('fs');
const newdata="I am new data";
fs.writeFileSync('./data.txt', newdata);

// const data = fs.readFileSync('./data.txt', 'utf8');
// console.log(data);