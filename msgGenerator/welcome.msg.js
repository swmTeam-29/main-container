exports.welcomeMsgGenerator = (conversationId) => {
  return {
    conversationId: conversationId,
    text: '멘토링 신청을 도와주는 애기멘티소마를 이용해보세요!',
    blocks: [
      {
        type: 'header',
        text: '29팀 Team[-2]',
        style: 'blue',
      },
      {
        type: 'text',
        text:
          '안녕하세요 👋 \n\n멘토링 신청의 모든 것을 도와주는 *애기멘티소마*입니다 \n\n듣고 싶던 멘토링을 놓치지 않도록 제가 알림을 보내드릴께요! \n\n소마 홈페이지 계정 정보를 등록해서 마감되기 전에 빠르고 간편하게 신청해보세요 👍 \n\n실수로 신청했다면 바로 취소하실 수도 있습니다 😁\n\n멘토링을 신청하는 과정은 시간이 걸릴 수 있어요 🥺 \n\n신청결과를 전송해드릴테니 잠시만 기다려주세요! \n\n또한 등록된 멘토링이 어떨지 궁굼하시다면 제가 해당 멘토님의 멘토링 한줄평을 조회도 해드릴께요 🔍',
        markdown: true,
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
