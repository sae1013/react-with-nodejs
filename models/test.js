const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
  user_id:String,
  post_list:[String]
});

module.exports = mongoose.model('Test',testSchema)

// model이름은 단수로 지정해야 collection에 복수네임으로 저장됨 

