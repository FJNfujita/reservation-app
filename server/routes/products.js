const express = require('express')
const router = express.Router()
const Product = require('../model/product')

// サンプルデータそのまま出力
const FakeDb = require('../fake-db')


router.get('', function(req, res) {
    // DBからデータ取得
    // Product.find({}, function(err, foundProducts){
    //     return res.json(foundProducts)
    // })

    // サンプルデータそのまま出力
    const fakeDb = new FakeDb()
    return res.json(fakeDb)
})

router.get('/:productId', function(req, res) {
    const productId = req.params.productId
    // DBからデータ取得
    // Product.findById(productId, function(err, foundProduct){
    //     if(err) {
    //          return res.status(422).send({errors: [{title: 'product error', detail: 'product not found'}]})
    //     }
    //     return res.json(foundProduct)
    // })

    // サンプルデータそのまま出力
    const fakeDb = new FakeDb()
    res.json(fakeDb.products[productId - 1])
})

module.exports = router