const axios = require('axios');
const kakaoInstance = axios.create({
  baseURL: 'https://api.kakaowork.com',
  headers: {
    Authorization: `Bearer ${process.env.KAKAO_BOT_KEY}`,
  },
});

exports.getUserList = async () => {
  var res = await kakaoInstance.get('/v1/users.list?limit=1');
  const users = res.data.users;
  while(isnull(res.data.cursor)){
    res = await kakaoInstance.get(`/v1/users.list?limit=1?cursor=${res.data.cursor}`);
    res.data.users.forEach(user=>{users.push(user);});
  }
  
  return users;
};

exports.openConversations = async ({ userId }) => {
  const data = {
    user_id: userId,
  };
  const res = await kakaoInstance.post('/v1/conversations.open', data);
  return res.data.conversation;
};

exports.sendMessage = async ({ conversationId, text, blocks }) => {
  const data = {
    conversation_id: conversationId,
    text,
    ...(blocks && { blocks }),
  };
  const res = await kakaoInstance.post('/v1/messages.send', data);
  return res;
};
