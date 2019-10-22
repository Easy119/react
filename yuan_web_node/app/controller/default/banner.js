'use strict';
const  fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller

class BannerController extends Controller {
    async add() {
        const { ctx } = this;
        let res;
        try {
            let file = ctx.request.files[0];
            let files = fs.readFileSync(file.filepath) ;
            fs.writeFileSync(path.join(__dirname, '../../view/test.png'), files)
            // let result = await ctx.service.banner.add();
            res = { code: 200, message: '', data: files.filename}
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