const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId;
 
const UserSchema = new Schema({
  //author: ObjectId,
  id: String,
  username: { 
      type: String, 
      required: true, 
      max:[60, 'ユーザー名は最大60文字までです'] 
    }, // 必須項目
  email: { 
      type: String, 
      required: true, 
      lowercase: true,
      unique: true,
      max:[60, 'Eメールは最大60文字までです'] 
    }, // 必須項目
  password: { 
      type: String, 
      required: true,  // 必須項目
      min:[6, 'パスワードは6文字以上で入力してください'], 
      max:[30, 'パスワードは最大30文字までです'] 
    },
});

UserSchema.methods.hasSamePassword = function(inputPassword) {
    const user = this
    // 入力されたパスとDBの暗号化されたパスを比較
    return bcrypt.compareSync(inputPassword, user.password)
}

// パスワードを暗号(ハッシュ)化する
UserSchema.pre('save', function() {
    const user = this
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            // Store hash in your password DB.
            user.password = hash
            next()
        });
    });
})

module.exports = mongoose.model('User', UserSchema)