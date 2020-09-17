if (process.env.NODE_ENV === "production") {
    module.exports = require('./prod') //本番環境DB
} else {
    module.exports = require('./dev') //開発用環境DB
}