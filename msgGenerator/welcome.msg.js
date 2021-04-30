exports.welcomeMsgGenerator = (conversationId) => {
  return {
    conversationId: conversationId,
    text: '멘토링 신청을 도와주는 애기멘티소마를 이용해보세요!',
    blocks: [
      {
        type: 'header',
        text: 'Team[-2]의 애기멘티소마 BOT',
        style: 'blue',
      },
      {
        type: 'text',
        text:
          '안녕하세요👋\n멘토링 신청의 모든 것을 도와주는 *애기멘티소마*입니다\n\n듣고 싶던 멘토링을 놓치지 않도록 제가 알림을 보내드릴게요!\n\n소마 계정 정보를 등록해 빠르고 간편하게 신청/취소해보세요 👍\n\n멘토링이 성공적으로 신청이 되면 신청 결과를 보내드립니다. 결과가 올 때까지 잠시만 기다려주세요!\n\n멘토링 한줄평도 제가 조회해드릴게요 🔍\n',
        markdown: true,
      },
      {
        type: 'context',
        content: {
          type: 'text',
          text:
            '[README 보러 가기](https://github.com/swmTeam-29/main-container)',
          markdown: true,
        },
        image: {
          type: 'image_link',
          url:
            'https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/etc@3x.png',
        },
      },
      {
        type: 'context',
        content: {
          type: 'text',
          text:
            '[개인정보수집이용동의서](https://docs.google.com/document/d/1My0Iq5N73GQMFbF27Iu01YCkvZhSwJvbWknfPnRUILk/edit?usp=sharing)',
          markdown: true,
        },
        image: {
          type: 'image_link',
          url:
            'https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/doc@3x.png',
        },
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
