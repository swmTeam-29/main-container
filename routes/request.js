const router = require('express').Router();
const libKakaoWork = require('../libs/kakaoWork');
const keywordModal = require('../msgGenerator/keywordModal.msg');
const reviewWriteModal = require('../msgGenerator/review/reviewWriteModal.msg');
const reviewSearchModal = require('../msgGenerator/review/reviewSearchModal.msg');
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
    case 'keyword_setting': {
      // 웰컴 메시지의 키워드 설정 버튼 눌렀을 때 키워드 설정 모달 전송
      const msg = keywordModal();
      return res.json(msg);
    }

    case 'review_request': {
      // "한줄평 쓰러가기" 버튼 눌렀을 때 모달 전송
      const msg = reviewWriteModal();
      return res.json(msg); //사용자에게 모달 띄움
    }

    case 'review_search': {
      // "멘토링 한줄평 검색" 버튼 눌렀을 때 모달 전송
      const msg = reviewSearchModal();
      return res.json(msg); //사용자에게 모달 띄움
    }

    case 'montoring_setting': {
      const msg = accountModal();
      return res.json(msg);
    }

    default:
      break;
  }
});

module.exports = router;
