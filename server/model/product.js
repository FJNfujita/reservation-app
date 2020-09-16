const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const ObjectId = Schema.ObjectId;
 
const ProductSchema = new Schema({
  //author: ObjectId,
  id: String,
  coverImage: String,
  name: { type: String, required: true, max:[60, '最大60文字までです'] }, // 必須項目
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingText1: String,
  headingText2: String,
  headingText3: String,
});

module.exports = mongoose.model('product', ProductSchema)