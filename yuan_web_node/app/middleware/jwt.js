const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')
module.exports = (options, app) => {
    return async function userInterceptor(ctx, next) {
        let authToken = ctx.header.authorization
        if (authToken) {
            const res = verifyToken(authToken) // 解密token
            console.log(res)
            if (res._id) {
                const redis_token = await this.ctx.model.User.findOne({_id:res._id});;
                if (redis_token.token == authToken) {
                    await next();
                } else {
                    ctx.body = { code: 50012, msg: '您的账号已在其他地方登录' }
                }
            } else {
                ctx.body = { code: 50012, msg: '登录状态已过期' }
            }
        } else {
            ctx.body = { code: 50008, msg: '请登陆后再进行操作' }
        }

    }
}
function verifyToken(token) {
    const cert = fs.readFileSync(path.join(__dirname,'../public/rsa_private_key.pem'))
    let res = '';
    try {
        const result = jwt.verify(token,cert,{algorithms: [ 'RS256' ]}) || {};
        const {expire_time} = result;
        const current = Math.floor(Date.now() / 1000);
        if (current <= expire_time) res = result.data || {}
    } catch (e) {
        res = {
            code: '-1',
            content: e.message || 'unknown error'
        }
    }
    return res

}