const libKakaoWork = require('../libs/kakaoWork');
const request = require('request');

exports.applicant = (data) => {
  const { message, actions, action_time, value, react_user_id } = data;
  const userId = react_user_id;
  const link2 = message.blocks[0];
  const link = ''; //test
  const url =
    'https://e79d0h6thd.execute-api.us-east-2.amazonaws.com/default/swm-applicant';

  let options = {
    uri: url,
    method: 'POST',
    headers: {
      'x-api-key': process.env.LAMBDA_API_KEY,
    },
    body: {
      userId,
      type: 'applicant',
      link,
    },
    json: true, //json으로 보낼경우 true로 해주어야 header값이 json으로 설정됩니다.
  };

  request.post(options, function (err, httpResponse, body) {
    console.log(body);
  });
};
