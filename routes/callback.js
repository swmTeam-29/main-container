const router = require('express').Router();
const libKakaoWork = require('../libs/kakaoWork');

const mentoring = require('../controllers/mentoring');
const account = require('../controllers/account');
const review = require('../controllers/review');

const keywordComplete = require('../msgGenerator/keywordComplete.msg');

/**
 *  @author  dongjin
 *  @brief
 *    메세지 혹은 모달의 submit을 처리하는 callback
 *    kakao work api의 submit_action과 submit_modal에 해당
 */
router.post('/', async (req, res, next) => {
  //res.status(200).send({ msg: "test" });
  const type = req.body.type;

  switch (type) {
    //메세지에서 submit 시 callback
    case 'submit_action': {
      await callbackFromMsg(req, res, next);
      break;
    }

    //모달에서 submit 시 callback
    case 'submission': {
      await callbackFromModal(req, res, next);
      break;
    }

    default: {
      break;
    }
  }
});

/**
 *  @author seonno
 *  @brief
 *    유저가 메세지에서 submit한 경우 callback
 *    kakao work api의 submit_action 에 해당
 */
const callbackFromMsg = async (req, res, next) => {
  const {
    action_time,
    message,
    react_user_id,
    action_name,
    actions,
    value,
  } = req.body;

  switch (action_name) {
    case 'keyword_setting_results': {
      // 키워드와 채팅방 고유 id DB에 저장
      console.log(message.conversation_id + ': ' + actions.keyword_input);
      const msg = keywordComplete(message, actions);
      // 키워드 알림 설정 완료 시 전송 메시지
      await libKakaoWork.sendMessage(msg);
      break;
    }

    case 'applicantMentoring': {
      mentoring.applicant(req.body);
      break;
    }

    default: {
      break;
    }
  }

  res.json({ result: true });
};

/**
 *  @author seonno
 *  @brief
 *    유저가 모달에서 submit한 경우 callback
 *    kakao work api의 submission (=submit_modal)에 해당
 */
const callbackFromModal = async (req, res, next) => {
  const { action_time, actions, message, react_user_id, value } = req.body;

  const modal_name = JSON.parse(value).modal_name;

  switch (modal_name) {
    case 'keyword_setting_results': {
      // 키워드와 채팅방 고유 id DB에 저장
      console.log(message.conversation_id + ': ' + actions.keyword_input);
      const msg = keywordComplete(message, actions);
      // 키워드 알림 설정 완료 시 전송 메시지
      await libKakaoWork.sendMessage(msg);
      break;
    }

    case 'applicantMentoring': {
      mentoring.applicant(req.body);
      break;
    }

    case 'review_write': {
      //한줄평을 db에 저장하고, 저장성공/실패 메세지 보냄
      review.sendReviewEnrollResult(req, res);
      break;
    }

    case 'review_search': {
      //사용자가 정한 멘토님에 대한 모든 한줄평을 db에서 가져와서 메세지로 보낸다.
      review.sendMentorReviews(req, res);
      break;
    }

    case 'account_write': {
      account.accountSave(req, res, next);
      break;
    }

    default: {
      break;
    }
  }

  res.json({ result: true });
};

module.exports = router;
