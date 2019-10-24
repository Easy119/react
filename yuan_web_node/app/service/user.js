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
            console.log(data)
            this.app.logger.log(data)
            if(data){
                let _id = data._id;
                data.token = "";
                data.expire_time = "";
                let token = this.ctx.helper.loginToken(data);
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
                    data: '账户密码错误,请重新输入'
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
    async update(_id,newPwd) {
        console.log(_id,newPwd)
        let res;
        try {
            let info = await this.ctx.model.User.update({_id},{pwd:newPwd});
            console.log(info)
            this.app.logger.log(info);
            if(info.ok){
                res = {
                    code: '0',
                    content: 'user update ok'
                }
            } else {
                res = {
                    code: '-1',
                    content: 'user update failed'
                }
            }
           
        } catch (e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-2',
                content: e.message || 'unknown error'
            }
        }
        return res
    }
    async findOne(_id) {
        let res;
        try {
            let data = await this.ctx.model.User.findOne({_id:_id});
            this.app.logger.log(data)
            res = data.token
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