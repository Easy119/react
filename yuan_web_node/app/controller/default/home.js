'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        // let result = await ctx.service.mysql.find("news_titles", { id: 1 });
        let result = await ctx.service.user.register();
        console.log(result)
        this.ctx.body = JSON.stringify(result)
    }
    async search() {
        let db = this.app.mongodb;

        let result = await db.collection('user').findOne({
            // some query here
            name: '徐鑫鑫'
        });
        console.log(result)
        this.ctx.body = result;
    }

}

module.exports = HomeController