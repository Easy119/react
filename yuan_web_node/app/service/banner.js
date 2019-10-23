const Service = require('egg').Service

class BannerService extends Service {

  
    async add(file) {
        let res;
        try {
            let data = await this.ctx.model.Banner.create({
                url: file
            })
            this.app.logger.log(data);
            res = {
                code: '0',
                data: '添加图片成功',
            }
        } catch (e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-1',
                content: e.message || 'unknown error'
            }
        }
        return res;
    }
    async index(){
        let res;
        try {
            let data = await this.ctx.model.Banner.find();
            console.log(data)
            this.app.logger.log(data);
            res = {
                code: '0',
                data: data,
            }
        } catch (e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-1',
                content: e.message || 'unknown error'
            }
        }
        return res;
    }
}

module.exports = BannerService;