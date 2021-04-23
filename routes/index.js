const express = require("express");
const router = express.Router();

const libKakaoWork = require("../libs/kakaoWork");

router.post("/alert", async (req, res, next) => {
  const data = req.body;
  console.log(typeof data.subject);
  console.log(data.description.join("\n"));
  // 유저 목록 검색 (1)
  const users = await libKakaoWork.getUserList();

  // 검색된 모든 유저에게 각각 채팅방 생성 (2)
  const conversations = await Promise.all(
    users.map((user) => libKakaoWork.openConversations({ userId: user.id }))
  );

  // 생성된 채팅방에 메세지 전송 (3)
  const messages = await Promise.all([
    conversations.map((conversation) =>
      libKakaoWork.sendMessage({
        conversationId: conversation.id,
        text: "멘토링 알림",
        blocks: [
          {
            type: "header",
            text: "멘토링이 등록되었습니다.",
            style: "blue",
          },
          {
            type: "image_link",
            url:
              "https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image3@3x.jpg",
          },
          {
            type: "text",
            text: data.subject,
            markdown: true,
          },
          {
            type: "divider",
          },
          {
            type: "description",
            term: "접수기간",
            content: {
              type: "text",
              text: data.description[0].split(": ")[1],
              markdown: false,
            },
            accent: true,
          },
          {
            type: "description",
            term: "행사기간",
            content: {
              type: "text",
              text: data.description[1].split(": ")[1],
              markdown: false,
            },
            accent: true,
          },
          {
            type: "description",
            term: "신청인원",
            content: {
              type: "text",
              text: data.description[2].split(": ")[1],
              markdown: false,
            },
            accent: true,
          },
          {
            type: "description",
            term: "멘토",
            content: {
              type: "text",
              text: data.description[3].split(": ")[1],
              markdown: false,
            },
            accent: true,
          },
          {
            type: "button",
            text: "신청하기",
            style: "primary",
          },
        ],
      })
    ),
  ]);
  // 응답값은 자유롭게 작성하셔도 됩니다.
  res.json({
    result: true,
  });
});

router.get("/submit", async (req, res, next) => {
  const users = await libKakaoWork.getUserList();

  // 검색된 모든 유저에게 각각 채팅방 생성 (2)
  const conversations = await Promise.all(
    users.map((user) => libKakaoWork.openConversations({ userId: user.id }))
  );

  const messages = await Promise.all(
    conversations.map((conversation) =>
      libKakaoWork.sendMessage({
        conversationId: conversation.id,
        text: "Push alarm message",
        blocks: [
          {
            type: "header",
            text: "계정줘",
            style: "blue",
          },
          {
            type: "text",
            text: "계정줘야 신청하지!",
            markdown: true,
          },
          {
            type: "button",
            text: "계정등록하기",
            style: "default",
            action_type: "call_modal",
            value: "a=123",
          },
        ],
      })
    )
  );

  res.json({
    result: true,
  });
});

router.post("/request", async (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
