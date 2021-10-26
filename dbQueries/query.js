const Test = require('../models/test.js'); // Model 

let insertData = async() => {
  try{
    // const doc = await Test.create({_id:'123',data:'zzz'})
    const doc = await Test.findOne({_id:'123'}).exec();
    console.log(doc)
    // const updateObj= await Test.findById({postId:'1234'}).exec();
    // console.log(updateObj.postId)
    // return doc

  }catch(e){
    console.log(e)
    throw e
  }
  
  
    
  
}

exports.insertData = insertData;

