const libKakaoWork = require('../libs/kakaoWork');

exports.mentoring = async (req, res, next) => {
  const conversations = req.conversations;
  const messages = await Promise.all([
    conversations.map((conversation) => {
      const data = {
        conversationId: conversation.id,
        text: '멘토링 알림',
        blocks: [
          {
            type: 'header',
            text: '멘토링이 등록되었습니다.',
            style: 'blue',
          },
          {
            type: 'image_link',
            url:
              'https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image3@3x.jpg',
          },
          {
            type: 'text',
            text: data.subject,
            markdown: true,
          },
          {
            type: 'divider',
          },
          {
            type: 'description',
            term: '접수기간',
            content: {
              type: 'text',
              text: data.description[0].split(': ')[1],
              markdown: false,
            },
            accent: true,
          },
          {
            type: 'description',
            term: '행사기간',
            content: {
              type: 'text',
              text: data.description[1].split(': ')[1],
              markdown: false,
            },
            accent: true,
          },
          {
            type: 'description',
            term: '신청인원',
            content: {
              type: 'text',
              text: data.description[2].split(': ')[1],
              markdown: false,
            },
            accent: true,
          },
          {
            type: 'description',
            term: '멘토',
            content: {
              type: 'text',
              text: data.description[3].split(': ')[1],
              markdown: false,
            },
            accent: true,
          },
          {
            type: 'button',
            text: '신청하기',
            style: 'primary',
          },
        ],
      };

      return libKakaoWork.sendMessage(data);
    }),
  ]);
  const err = [];
  messages.forEach((element) => {
    if (element.error) {
      err.append({ user_id: element.message.user_id, err: element.error });
    }
  });
  if (err) {
    res.status(500).send({ err });
    return;
  }
  res.status(200).send({ result: 'ok' });
};

exports.keyword = async (req, res, next) => {};
