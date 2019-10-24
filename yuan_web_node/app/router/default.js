module.exports = app =>{
    const {router,controller} = app;
    router.post("/default/user/register",controller.default.home.register)
    router.post("/default/user/login",controller.default.home.login)
    router.put("/default/user/update",controller.default.home.update)
    router.get("/default/getone",controller.default.home.getone)
    router.post("/default/banner/add",controller.default.banner.add)
    router.get("/default/banner/list",controller.default.banner.index)
    router.get("/default/video/list",controller.default.video.index)
    router.post("/default/video/upload",controller.default.video.upload)
}