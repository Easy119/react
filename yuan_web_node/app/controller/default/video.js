'use strict';

const Controller = require('egg').Controller;

class VideoController extends Controller {
    async upload() {
        const { ctx } = this;
        let res;
        try {
            let files = ctx.request.files[0];
            let filename = await ctx.helper.writeFile(files, 'video');
            let result = await ctx.service.video.add(`${this.config.api}public/upload/video/${filename}`);
            res = { code: 200, message: result }
        } catch (e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-2',
                content: e.message || 'unknown error'
            }
        }
        this.ctx.body = res
    }
    async index() {
        const { ctx } = this;
        let res;
        try {
            let data = await ctx.service.video.index();
            res = {
                code: '0',
                data: data
            }
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

module.exports = VideoController;
