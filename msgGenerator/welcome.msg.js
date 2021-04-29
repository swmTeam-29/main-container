exports.welcomeMsgGenerator = (conversationId) => {
  return {
    conversationId: conversationId,
    text: 'Welcome message',
    blocks: [
      {
        type: 'header',
        text: '애기 멘티 베이비시터봇',
        style: 'blue',
      },
      {
        type: 'text',
        text: '도움이 필요한 애기 멘티가 있다는 소식에 내가 등장! 무슨 도움이 필요하니?',
        markdown: true,
      },
      {
        type: 'button',
        text: '멘토링 키워드 알림 설정',
        style: 'default',
        action_type: 'call_modal',
        value: '{"action_name":"keyword_setting"}',
      },
      {
        type: 'button',
        text: 'SWM 홈페이지 계정 등록',
        style: 'default',
        action_type: 'call_modal',
        value: '{"action_name":"montoring_setting"}',
      },
      {
        type: 'button',
        text: '멘토링 한줄평 확인하기',
        action_type: 'call_modal',
        action_name: 'review_search',
        value: '{"action_name":"review_search"}',
        style: 'default',
      },
    ],
  };
};
