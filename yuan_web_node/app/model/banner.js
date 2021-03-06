// model -> indexBanner.js
module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    // 按照mock的数据，有四个字段：name/age/sex/job lastTime是用来标记最后的更改时间
    const BannerSchema = new Schema({
        url: {
            type: Array
        }
        
    })
    // 映射到egg-mongo db 库的users表中（不区分大小写）
    const Banner = mongoose.model('index_banner', BannerSchema)
    return Banner
}
