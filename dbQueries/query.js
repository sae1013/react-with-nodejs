const Test = require("../models/test.js"); // Model

let isLike = async () => {

};

let findLikeList = async (userId) => { // 유저좋아요리스트를 가져옴
  const result = await Test.findOne({user_id:userId},'post_list');
  if(result){
    return result.post_list
  }else { 
    return []
  }
   // res {_id , post_list}
}

let findLikeListTest = async (userId) => { // 유저좋아요리스트를 가져옴
  const result = await Test.findOne({user_id:userId},'post_list');
  if(result){
    return result.post_list
  }else { 
    return []
  }
   // res {_id , post_list}
}


let checkLike = async (userId,postId)=>{
  const posts = await findLikeList(userId); // [1,2,3] 만약 빈배열로 나오면
  //빈배열인경우 (아예 처음 눌렀을 때는 빈배열을 삽입.)
  if(posts.length == 0){
    await Test.create({user_id:userId,post_list:[postId]});
    return true
  }

  const existIdx = posts.findIndex( post=>post.toString() === postId);
  if(existIdx == -1){ // 좋아요를+1
    await push(userId,postId);
    return true
    
  }else { // 좋아요 취소
    await pop(userId,postId);
    return false
  }
}

let pop = async(userId,postId) => {
  const res = await Test.findOneAndUpdate(
    {
      user_id: userId,
    },
    { $pull: { post_list: postId } }
  );
}

let push = async (userId,postId) => { // post추가 하기.
  const res = await Test.findOneAndUpdate(
    {
      user_id: userId,
    },
    { $push: { post_list: postId } }
  );
  
};

let init = async () => {
  // 데이터셋 미리 삽입하는 초기화 함수.
  const res = await Test.create({ user_id: 1, post_id: ["1"] });

  console.log(res);
};

exports.findLikeList = findLikeList;
exports.init = init;
exports.push = push;
exports.checkLike = checkLike;
exports.findLikeListTest = findLikeListTest;