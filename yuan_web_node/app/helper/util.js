const path = require('path')
const fs = require('fs');
const jwt = require('jsonwebtoken')
module.exports = app =>{
    return {
        loginToken(data, expires = 7200){
            const expire_time = Math.floor(Date.now()/1000) + expires;
            const cert = fs.readFileSync(path.join(__dirname,'../public/rsa_private_key.pem'))
            const token = jwt.sign({ data, expire_time }, cert, { algorithm: 'RS256' });
            return {token,expire_time}
        }
    }
}