const libKakaoWork = require('../libs/kakaoWork');
const request = require('request');
const applicantSucessMsg = require('../msgGenerator/applicantSucess.msg');

exports.applicant = (data) => {
  const { message, actions, action_time, value, react_user_id } = data;
  const userId = String(react_user_id);
  const conversationId = message.conversation_id;
  const value_json = JSON.parse(value);
  const link = value_json.link;
  const subject = value_json.subject;
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

  request.post(options, async function (err, httpResponse, body) {
    console.log(body);
    let data = {
      result: 'default',
      desc: 'default',
    };
    if (body.statusCode === 200) {
      data = {
        button: {
          type: 'button',
          text: '취소하기',
          style: 'danger',
          action_type: 'submit_action',
          action_name: 'cancleMentoring',
          value: `{"link":"${link}","subject":"${subject}"}`,
        },
        result: '멘토링이 신청되었습니다',
        desc: `${subject} 멘토링에 ${body.body.number}번째로 신청하셨습니다`,
      };
    } else if (body.statusCode === 400) {
      data = {
        button: {
          type: 'button',
          text: '계정등록하기',
          style: 'default',
          action_type: 'call_modal',
          value: '{"action_name":"montoring_setting"}',
        },
        result: '멘토링 신청에 실패하였습니다',
        desc: `해당 멘토링: ${subject}, 계정정보를 등록했는지 확인해주세요`,
      };
    } else if (body.statusCode === 500) {
      data = {
        button: {
          type: 'button',
          text: '멘토링 게시물 보러가기',
          style: 'default',
          action_type: 'open_system_browser',
          value: link,
        },
        result: '멘토링 신청에 실패하였습니다',
        desc: `${subject} (이)가 이미 신청하신 멘토링인지 확인해주세요`,
      };
    }
    await libKakaoWork.sendMessage(applicantSucessMsg(conversationId, data));
  });
};

exports.cancel = (data) => {
  const { message, actions, action_time, value, react_user_id } = data;
  const userId = String(react_user_id);
  const conversationId = message.conversation_id;
  const value_json = JSON.parse(value);
  const link = value_json.link;
  const subject = value_json.subject;
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
      type: 'cancle',
      link,
    },
    json: true, //json으로 보낼경우 true로 해주어야 header값이 json으로 설정됩니다.
  };
  request.post(options, async function (err, httpResponse, body) {
    console.log(body);
    let data = {
      result: 'default',
      desc: 'default',
    };
    if (body.statusCode === 200) {
      data = {
        button: {
          type: 'button',
          text: '다시 신청하기',
          style: 'primary',
          action_type: 'submit_action',
          action_name: 'applicantMentoring',
          value: `{"link":"${data.link}","subject":"${data.subject}"}`,
        },
        result: '멘토링이 취소되었습니다',
        desc: `${subject} 멘토링 신청이 취소되었습니다`,
      };
    } else if (body.statusCode === 400) {
      data = {
        button: {
          type: 'button',
          text: '계정등록하기',
          style: 'default',
          action_type: 'call_modal',
          value: '{"action_name":"montoring_setting"}',
        },
        result: '멘토링 취소에 실패하였습니다',
        desc: `해당 멘토링: ${subject}, 계정정보를 등록했는지 확인해주세요`,
      };
    } else if (body.statusCode === 500) {
      data = {
        button: {
          type: 'button',
          text: '멘토링 게시물 보러가기',
          style: 'default',
          action_type: 'open_system_browser',
          value: link,
        },
        result: '멘토링 신청에 실패하였습니다',
        desc: `해당 멘토링: ${subject}, 신청취소 버튼이 신청자 리스트 1페이지에 없을 시 취소할 수 없습니다.`,
      };
    }
    await libKakaoWork.sendMessage(applicantSucessMsg(conversationId, data));
  });
};
