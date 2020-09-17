const express = require('express')
const mongoose = require('mongoose')
const config = require('./config') //index.jsを指す
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
})
.then(
    ()=> {
        // 本番ではないときにDBを初期化する
        if (process.env.NODE_ENV !== "production") {
            const fakeDb = new FakeDb()
            // fakeDb.initDb()
        }
    }
)

const app = express()

app.use('/api/v1/products', productRoutes)

// app.get('/products', function(req, res) {
//     res.json({'sucess':true})
// })
if (process.env.NODE_ENV === "production") {
    const appPath = path.join( __dirname, '..', 'dist')
    app.use(express.static(appPath))
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'))
    })
}

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!')
})