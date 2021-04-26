const router = require('express').Router();
const libKakaoWork = require('../libs/kakaoWork');
const mentoring = require('../controllers/mentoring');
const keywordComplete = require('../msgGenerator/keywordComplete.msg');

router.post('/', async (req, res, next) => {
  //res.status(200).send({ msg: "test" });
  const {
    message,
    actions,
    react_user_id,
    action_name,
    action_time,
    value,
  } = req.body;

  switch (action_name) {
    case 'keyword_setting_results':
      // 키워드와 채팅방 고유 id DB에 저장
      console.log(message.conversation_id + ': ' + actions.keyword_input);
      const msg = keywordComplete(message, actions);
      // 키워드 알림 설정 완료 시 전송 메시지
      await libKakaoWork.sendMessage(msg);
      break;
      
    case 'applicantMentoring':
      mentoring.applicant(req.body);
      break;

    case 

    default:
  }

  res.json({ result: true });
});

module.exports = router;