const request = require('request');
const accountSucess = require('../msgGenerator/accountSucess.msg');
exports.accountSave = async (req, res, next) => {
  const { message, actions, react_user_id } = req.body;
  const conversationId = message.conversation_id;

  const userId = react_user_id;
  const id = actions.input_name1;
  const password = actions.input_name2;

  const url =
    'https://e79d0h6thd.execute-api.us-east-2.amazonaws.com/default/swm-id-check';

  let options = {
    uri: url,
    method: 'POST',
    headers: {
      'x-api-key': process.env.LAMBDA_API_KEY,
    },
    body: {
      userId,
      id,
      password,
    },
    json: true, //json으로 보낼경우 true로 해주어야 header값이 json으로 설정됩니다.
  };

  request.post(options, async function (err, httpResponse, body) {
    console.log(body);
    const data = { result: body, desc: body };
    const msg = accountSucess(data);
    await libKakaoWork.sendMessage(msg);
  });
};
