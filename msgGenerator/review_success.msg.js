//data: mento, subject, 
exports.reviewSuccessMsgGenerator = (conversationId, data) => {
  return {
    conversationId: conversationId,
    text: '멘토링 한줄평 등록 완료',
    blocks: [
      {
        type: 'header',
        text: '멘토링 한줄평 등록 완료',
        style: 'blue',
      },
      {
        type: 'text',
        text: `*${data.mentor}* 멘토님의`,
        markdown: true,
      },
      {
        type: 'text',
        text: `${data.subject} 멘토링에 대한`,
        markdown: false,
      },
      {
        type: 'text',
        text: '한줄평이 등록되었습니다.',
        style: 'default',
      },
    ],
  };
};
  