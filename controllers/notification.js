const libKakaoWork = require('../libs/kakaoWork');
const mentoringMsg = require('../msgGenerator/mentoring.msg');
const welcomeMsg = require('../msgGenerator/welcome.msg');

exports.mentoring = async (req, res, next) => {
  const data = req.body;
  const conversations = req.conversations;
  const messages = await Promise.all(
    conversations.map((conversation) => {
      const msg = mentoringMsg.mentoringMsgGenerator(conversation.id, data);
      return libKakaoWork.sendMessage(msg);
    })
  );
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

exports.welcome = async (req, res, next) => {
  // 유저 목록 검색 (1)
  const users = await libKakaoWork.getUserList();

  // 검색된 모든 유저에게 각각 채팅방 생성 (2)
  const conversations = await Promise.all(
    users.map((user) => libKakaoWork.openConversations({ userId: user.id }))
  );

  const messages = await Promise.all(
    conversations.map((conversation) => {
      const msg = welcomeMsg.welcomeMsgGenerator(conversation.id);
      libKakaoWork.sendMessage(msg);
    })
  );

  res.status(200).send({ result: 'ok' });
};

exports.keyword = async (req, res, next) => {
  const users = await libKakaoWork.getUserList();
  // 검색된 모든 유저에게 각각 채팅방 생성 (2)
  const conversations = await Promise.all(
    users.map((user) => libKakaoWork.openConversations({ userId: user.id }))
  );
  req.conversations = conversations;
  next();
};
