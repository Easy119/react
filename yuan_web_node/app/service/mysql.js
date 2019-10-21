const Service = require('egg').Service

class MysqlService extends Service {
    async find(table,row){
        const data = await this.app.mysql.get(table,row)
        return {data}
    }
    async select(table,row){
        const data = await this.app.mysql.select(table,row)
        return {data}
    }
    async insert(table,row){
        const data = await this.app.mysql.select(table,row)
        return {data}
    }
    async update(table,row){
        const data = await this.app.mysql.update(table,row)
        return {data}
    }
    async delete(table,row){
        const data = await this.app.mysql.delete(table,row)
        return {data}
    }
}
module.exports = MysqlService