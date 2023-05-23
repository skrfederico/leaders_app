const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const engGroupSchema = new mongoose.Schema({
  body: { type: String, required: true },
  completed: { type: Boolean, default: false }
})
// console.log(bookmarkSchema.createdAt)
// console.log('schema')

const EngGroup = mongoose.model('EngGroup', engGroupSchema)

module.exports = EngGroup
