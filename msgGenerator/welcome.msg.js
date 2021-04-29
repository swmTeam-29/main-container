exports.welcomeMsgGenerator = (conversationId) => {
  return {
    conversationId: conversationId,
    text: 'Welcome message',
    blocks: [
      {
        type: 'header',
        text: '애기 멘티 소마 BOT',
        style: 'blue',
      },
      {
        type: 'text',
        text: '안녕하세요 *team[-2]* 입니다. \n이 봇은 다음 기능을 제공합니다.',
        markdown: true,
      },
      {
        type: 'divider',
      },
      {
        type: 'text',
        text:
          '1. 새로운 멘토링이 등록되면 알림\n신청하기 버튼으로 간단한 신청 가능',
        markdown: true,
      },
      {
        type: 'image_link',
        url:
          'https://user-images.githubusercontent.com/48829883/116539761-3f3fe180-a924-11eb-99a2-a8b0e660dbe5.PNG',
      },
      {
        type: 'divider',
      },
      {
        type: 'text',
        text: '2. 멘토님들의 한줄평 등록 및 검색',
        markdown: true,
      },
      {
        type: 'image_link',
        url:
          'https://user-images.githubusercontent.com/48829883/116539761-3f3fe180-a924-11eb-99a2-a8b0e660dbe5.PNG',
      },
      /*
      {
        type: 'button',
        text: '멘토링 키워드 알림 설정',
        style: 'default',
        action_type: 'call_modal',
        value: '{"action_name":"keyword_setting"}',
      },
      */
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
      {
        type: 'button',
        text: '멘토링 한줄평 쓰러가기',
        action_type: 'call_modal',
        action_name: 'review_request_by_welcome',
        value: '{"action_name":"review_request_by_welcome"}',
        style: 'default',
      },
    ],
  };
};
