module.exports = app =>{
    const {router,controller} = app;
    router.post("/default/register",controller.default.home.register)
    router.post("/default/login",controller.default.home.login)
    router.get("/default/getone",controller.default.home.getone)
    router.post("/default/add/banner",controller.default.banner.add)
}