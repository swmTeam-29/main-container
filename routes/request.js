const router = require('express').Router();
const libKakaoWork = require('../libs/kakaoWork');
const keywordModal = require('../msgGenerator/keywordModal.msg');
const reviewWriteModal = require('../msgGenerator/reviewWriteModal.msg');
const accountModal = require('../msgGenerator/accountModal.msg');
/**
 *  @author  dongjin
 *  @brief
 *    모달 띄워달라는 사용자의 요청 처리
 *    kakao work api의 request_modal에 해당함
 *  @comment
 *    req.body const {}로 받는 부분 수정 (seonno, 4.26 2200)
 *    action_name이 request body에 포함돼 있지 않음. value에 담아 보내야 할 듯 (seonno, 4.26 2200)
 *
 */
router.post('/', async (req, res, next) => {
  //res.status(200).send({ msg: "test" });
  const { type, value, action_time, message, react_user_id } = req.body;

  const value_json = JSON.parse(value);
  const action_name = value_json.action_name;

  switch (action_name) {
    case 'keyword_setting':
      // 웰컴 메시지의 키워드 설정 버튼 눌렀을 때 키워드 설정 모달 전송
      const msg1 = keywordModal();
      return res.json(msg1);
      break;

    case 'review_request':
      // 한줄평 권유 메세지의 "한줄평 쓰러가기" 버튼 눌렀을 때 모달 전송
      const msg2 = reviewWriteModal();

      //value : {멘토이름, 멘토링제목, 모달이름}
      const temp_value_json = Object.assign(value_json, {
        modal_name: 'review_write',
      });
      msg2.value = JSON.stringify(temp_value_json);
      return res.json(msg2); //사용자에게 모달 띄움
      break;

    case 'montoring_setting':
      const msg3 = accountModal();
      return res.json(msg3);
    default:
      break;
  }
});

module.exports = router;
