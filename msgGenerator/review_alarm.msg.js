//data: mentor, title, 
exports.mentroringMsgGenerator = (conversationId, data) => {
  return {
    conversationId: conversationId,
    text: '멘토링 한줄평 권유',
    blocks: [
      {
        type: 'header',
        text: '오늘 참여했던 멘토링 어땠나요?',
        style: 'blue',
      },
      {
        type: 'text',
        text: `*${data.mentor}*님의`,
        markdown: true,
      },
      {
        type: 'text',
        text: '___ 멘토링 어땠나요?',
        markdown: false,
      },
      {
        type: 'button',
        text: '한줄평 쓰러가기',
        style: 'default',
        action_type: 'call_modal',
        value: "mentoring_review_requset",
      },
    ],
  };
};
