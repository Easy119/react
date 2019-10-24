'use strict';

const Service = require('egg').Service;

class VideoService extends Service {
    async index() {
        let res;
        try {
            let data = await this.ctx.model.Video.find();
            this.app.logger.info(data);
            res = {
                data: data
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
    async add(file) {
        let res;
        try {
            let data = await this.ctx.model.Video.create({
                url: file
            })
            this.app.logger.log(data);
            res = {
                data: '视频上传成功',
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

module.exports = VideoService;
