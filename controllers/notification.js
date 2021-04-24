const libKakaoWork = require('../libs/kakaoWork');
const mentoringMsg = require('../msgGenerator/mentoring.msg');

exports.mentoring = async (req, res, next) => {
  const data = req.body;
  const conversations = req.conversations;
  const messages = await Promise.all([
    conversations.map((conversation) => {
      const msg = mentoringMsg.mentoringMsgGenerator(conversation.id, data);

      return libKakaoWork.sendMessage(msg);
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
