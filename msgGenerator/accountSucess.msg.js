module.exports = (conversationId, data) => {
  return {
    conversationId: conversationId,

    text: '계정 등록 결과',
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
      {
        type: 'button',
        text: 'button',
        style: 'default',
        action_type: 'call_modal',
        value: '{"action_name":"montoring_setting"}',
      },
    ],
  };
};
