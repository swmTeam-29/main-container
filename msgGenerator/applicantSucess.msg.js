module.exports = (conversationId, data) => {
  return {
    conversationId: conversationId,

    text: '멘토링 신청 결과',
    blocks: [
      {
        type: 'header',
        text: data.result,
        style: 'blue',
      },
      {
        type: 'text',
        text: data.desc,
        markdown: true,
      },
      data.button,
    ],
  };
};
