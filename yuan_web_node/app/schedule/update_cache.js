const Subscription = require('egg').Subscription;

class UpdateCache extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            cron: '0 0 */3 * * *', // 1 分钟间隔
            type: 'all', // 指定所有的 worker 都需要执行
        };
    }

    // subscribe 是真正定时任务执行时被运行的函数
    async subscribe() {
        const res = await this.ctx.curl('http://139.196.24.37:2000/new/getList', {
            method:'POST',
            dataType: 'json',
            data:{}
        });
        console.log(res.data.msg)
        // 这里编写我们要执行的任务代码, 我们这里就打印一下当前时间的试试
        console.log("任务执行 : " + new Date().toString());
        // this.ctx.app.cache = res.data;
        // console.log(this.ctx.app.cache)
    }
}

module.exports = UpdateCache;