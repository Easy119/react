'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {
    async register() {
        const { ctx } = this;
        let res;
        try {
            let {name,pwd,age,sex,job,phone} = ctx.request.body;
            let result = await ctx.service.user.register(name,pwd,age,sex,job,phone);
            res = result
        } catch (e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-2',
                content: e.message || 'unknown error'
            }
        }
        this.ctx.body = res

    }
    async login() {
        const { ctx } = this;
        let res;
        try {
            let {name,pwd} = ctx.request.body;
            console.log({name,pwd}) 
            let result = await this.ctx.service.user.login(name,pwd);
            res = result;
        } catch (e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-2',
                content: e.message || 'unknown error'
            }
        }
        this.ctx.body = res
    }
    async getone() {
        let resultAll = await this.ctx.service.user.findOne();
        this.ctx.body = resultAll;
    }

}

module.exports = HomeController