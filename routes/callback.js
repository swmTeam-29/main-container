const router = require('express').Router();
const libKakaoWork = require('../libs/kakaoWork');

router.post('/', async (req, res, next) => {
  //res.status(200).send({ msg: "test" });
  const { message, actions, action_time, value } = req.body; // 설문조사 결과 확인 (2)

  switch (value) {
    case 'keyword_setting_results':
      // 키워드와 채팅방 고유 id DB에 저장
      console.log(message.conversation_id + ': ' + actions.keyword_input);

      // 키워드 알림 설정 완료 시 전송 메시지
      await libKakaoWork.sendMessage({
        conversationId: message.conversation_id,
        text: '키워드 알림 설정이 완료되었습니다',
        blocks: [
          {
            type: 'text',
            text: '키워드 알림 설정이 완료되었습니다!',
            markdown: true,
          },
          {
            type: 'text',
            text: '*키워드 설정 내역*',
            markdown: true,
          },
          {
            type: 'description',
            term: '평점',
            content: {
              type: 'text',
              text: actions.keyword_input,
              markdown: false,
            },
            accent: true,
          },
          {
            type: 'description',
            term: '시간',
            content: {
              type: 'text',
              text: action_time,
              markdown: false,
            },
            accent: true,
          },
        ],
      });
      break;
    default:
  }

  res.json({ result: true });
});

module.exports = router;
