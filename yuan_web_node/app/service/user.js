const Service = require('egg').Service

class UserService extends Service {
    async register() {
        let db = this.app.mongodb;

        let User = db.collection('user');

        let rs;
        try {
            let info = await User.insertOne({
                name: '徐鑫鑫',
                phone: '177xxxxxxxx'
            });

            this.app.logger.log(info);

            rs = {
                code: '0',
                content: 'user register ok'
            }
        } catch (e) {
            this.app.logger.error(e && e.stack);

            rs = {
                code: '-1',
                content: e.message || 'unknown error'
            }
        }

        return rs;
    }
}

module.exports = UserService;