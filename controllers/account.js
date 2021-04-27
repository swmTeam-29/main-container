const request = require('request');
const accountSucess = require('../msgGenerator/accountSucess.msg');
exports.accountSave = async (req, res, next) => {
  const { message, actions, react_user_id } = req.body;
  const conversationId = message.conversation_id;

  const userId = String(react_user_id);
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
    let data = {
      result: 'default',
      desc: 'default',
    };
    if (body.statusCode == 200) {
      data = {
        result: '계정등록이 성공하였습니다.',
        desc: '해당 계정으로 멘토링을 신청됩니다.',
      };
    } else {
      data = {
        result: '계정등록이 실패하였습니다.',
        desc: '계정정보가 올바른지 확인해주세요',
      };
    }
    const msg = accountSucess(data);
    await libKakaoWork.sendMessage(msg);
  });
};
