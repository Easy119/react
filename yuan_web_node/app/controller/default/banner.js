'use strict';

const Controller = require('egg').Controller

class BannerController extends Controller {
    async add() {
        const { ctx } = this;
        let res;
        try {
            let result = await ctx.service.banner.add();
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
}
module.exports = BannerController 