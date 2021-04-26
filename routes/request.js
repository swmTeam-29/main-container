const router = require('express').Router();
const libKakaoWork = require('../libs/kakaoWork');
const keywordModal = require('../msgGenerator/keywordModal.msg');
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
    case 'keyword_setting':
      // 웰컴 메시지의 키워드 설정 버튼 눌렀을 때 키워드 설정 모달 전송
      const msg = keywordModal();
      return res.json(msg);
      break;
    default:
  }
});

module.exports = router;
