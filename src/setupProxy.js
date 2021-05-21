const proxy = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        proxy('/api',{
            target:"http://cx.icodef.com/wyn-nb?v=2",
            changeOrigin:true,
            pathRewrite:{'^/api':''}
        })
    )
}