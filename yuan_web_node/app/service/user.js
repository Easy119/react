const Service = require('egg').Service

class UserService extends Service {
    async register(name,pwd,age,sex,job,phone) {
        let rs;
        // name/age/sex/job 
        try {
            let info = await this.ctx.model.User.create({name,pwd,age,sex,job,phone});
            
            this.app.logger.log(info);

            rs = {
                code: '0',
                content: 'user register ok'
            }
        } catch (e) {
            this.app.logger.error(e && e.stack);

            rs = {
                code: '-1',
                content: e.message || 'unknown error'
            }
        }

        return rs;
    }
    async login(name,pwd) {
        let res;
        try {
            let data = await this.ctx.model.User.findOne({name,pwd});
            this.app.logger.log(data)
            if(data){
                let _id = data._id;
                data.token = "";
                data.expire_time = "";
                let token = this.ctx.helper.util.loginToken(data);
                let userInfo = Object.assign(data,{token:token.token,expire_time:token.expire_time});
                let update = await this.ctx.model.User.update({_id},userInfo);
                res = {
                    code:'0',
                    data:{
                        userInfo:userInfo
                    }
                }
            } else{
                res = {
                    code: '1',
                    data: '查无此人'
                }
            }
        } catch(e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-1',
                content: e.message || 'unknown error'
            }
        }
        return res;
    }
    async findOne() {
        let res;
        try {
            let data = await this.ctx.model.User.find({age:17});
            this.app.logger.log(data)
            res = {
                code: '0',
                data: data
            }
        } catch(e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-1',
                content: e.message || 'unknown error'
            }
        }
        return res;
    }
}

module.exports = UserService;