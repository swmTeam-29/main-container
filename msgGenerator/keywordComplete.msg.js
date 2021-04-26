module.exports = (message, actions) => {
  return {
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
        term: '키워드',
        content: {
          type: 'text',
          text: actions.keyword_input,
          markdown: false,
        },
        accent: true,
      },
    ],
  };
};
