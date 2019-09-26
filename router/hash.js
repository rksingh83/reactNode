const bcrypt = require('bcrypt');
 async function run(){
const salt  =   bcrypt.genSalt(10);
const hash  = await bcrypt.hash('1234',salt)
console.log(hash)
const isValid = await bcrypt.compare('1234',hash);
console.log(isValid);
}
run()
