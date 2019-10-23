'use strict';
const  fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller

class BannerController extends Controller {
    async add() {
        const { ctx } = this;
        let res;
        try {
            let files = ctx.request.files;
            console.log(files)
            let filesPathArr = []; // 图片存储路径
            for(let i = 0 ; i<files.length;i++){
                let filename = await ctx.helper.writeFile(files[i],'index');
                if(filename){
                    filesPathArr.push(`${this.config.api}public/upload/index/${filename}`)
                }
            }
            let result = await ctx.service.banner.add(filesPathArr);
            res = { code: 200, message: result}
        } catch (e) {
            this.app.logger.error(e && e.stack);
            res = {
                code: '-2',
                content: e.message || 'unknown error' 
            }
        }
        this.ctx.body = res
    }
    async index(){
        const { ctx } = this;
        let res;
        try {
            let result = await ctx.service.banner.index()
            res = {code:200,message:result}
        } catch(e){
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