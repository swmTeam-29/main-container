const router = require('express').Router();
const libKakaoWork = require('../libs/kakaoWork');

router.post('/', async (req, res, next) => {
  //res.status(200).send({ msg: "test" });
  const { message, value } = req.body;

  switch (value) {
    case 'keyword_setting':
      // 웰컴 메시지의 키워드 설정 버튼 눌렀을 때 키워드 설정 모달 전송
      return res.json({
        title: '멘토링 알림 키워드 설정',
        accept: '확인',
        decline: '취소',
        value: 'keyword_setting_results',
        blocks: [
          {
            type: 'label',
            text:
              '알림을 받고 싶은 멘토 이름을 쉼표(,)로 구분해서 입력해주세요.<br/>입력한 멘토가 멘토링을 개설했을 때만 알림이 옵니다.',
            markdown: true,
          },
          {
            type: 'input',
            name: 'keyword_input',
            required: true,
            placeholder: '멘토 이름을 쉼표(,)로 구분해서 입력해주세요',
          },
        ],
      });
      break;
    default:
  }
});

module.exports = router;
