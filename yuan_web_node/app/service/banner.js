const Service = require('egg').Service

class BannerService extends Service {

    async index() {
        let res;
        try {
            let data = await this.ctx.model.Banner.find();
            this.app.logger.log(data)
            if (data) {
                let token = this.ctx.helper.util.loginToken(data)
                res = {
                    code: '0',
                    data: {
                        token: token,
                        userInfo: data
                    }
                }
            } else {
                res = {
                    code: '1',
                    data: '查无此人'
                }
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
    async add() {
        let res;
        try {
            let data = await this.ctx.model.Banner.create({
                url: 'https://mirror-gold-cdn.xitu.io/168e08d73fe2ec41129?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
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
}

module.exports = BannerService;