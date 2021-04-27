exports.welcomeMsgGenerator = (conversationId) => {
  return {
    conversationId: conversationId,
    text: 'Welcome message',
    blocks: [
      {
        type: 'header',
        text: '@@봇',
        style: 'blue',
      },
      {
        type: 'text',
        text: `안녕하세요! team[-2]에서 개발한 @@봇입니다.
          </br>아래 키워드 알림 설정을 통해 원하는 키워드의 멘토링 알림만 받을 수 있습니다.`,
        markdown: true,
      },
      {
        type: 'button',
        text: '키워드 알림 설정',
        style: 'default',
        action_type: 'call_modal',
        value: '{"action_name":"keyword_setting"}',
      },
      {
        type: 'button',
        text: '멘토링 신청/취소 계정 설정',
        style: 'default',
        action_type: 'call_modal',
        value: '{"action_name":"montoring_setting"}',
      },
    ],
  };
};
