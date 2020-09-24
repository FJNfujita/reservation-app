const express = require('express')
const router = express.Router()
const User = require('../model/user')
const jwt = require('jsonwebtoken');
const config = require('../config/dev')


router.post('/login', function(req, res) {
    const { email, password } = req.body

    if(!email) {
        // Invalid error
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill email'}]})
    }
    if(!password) {
        // Invalid error
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill password'}]})
    }

    if(!foundUser.hasSamePassword(password)) { // パスワードが一致しない
        return res.status(422).send({errors: [{title: 'User error', detail: 'Incorrect password'}]})
    }

    const token = jwt.sign({
        userid: foundUser.id,
        username: foundUser.username
      }, config.SECRET, { expiresIn: '1h' });

    return res.json(token)
})

router.post('/register', function(req, res) {
    const { username, email, password, confirmPassword } = req.body
    /*
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    */

    if(!username) { // ユーザー名がない
        // Invalid error
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill username'}]})
    }
    if(!email) {
        // Invalid error
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill email'}]})
    }
    if(!password) {
        // Invalid error
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill password'}]})
    }
    if(password !== confirmPassword) { // パスワードと確認パスワードが一致しない
        // Invalid error
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please check password'}]})
    }

    // DBからデータ取得
    // User.findOne({email}, function(err, foundUser){ // すでにEメールが登録されているか
    //     if(err) {
    //         //  Error message
    //         return res.status(422).send({errors: [{title: 'User error', detail: 'Something went wrong'}]})
    //     }
    //     if(foundUser) { // 同じEメールが一件でもある
    //         // Invalid error
    //         return res.status(422).send({errors: [{title: 'User error', detail: 'User already exist'}]})
    //     }

    //     const user = new User({username, email, password})
    //     user.save(function(err) {
    //         if(err) {
    //             //  Error message
    //             return res.status(422).send({errors: [{title: 'User error', detail: 'Something went wrong'}]})
    //         }
    //         return res.json({'resisterd':  true})
    //     })
    // })
    return res.json({'resisterd':  true})
})

module.exports = router