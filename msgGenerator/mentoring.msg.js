exports.mentoringMsgGenerator = (conversationId, data) => {
  return {
    conversationId: conversationId,
    text: '멘토링 알림',
    blocks: [
      {
        type: 'header',
        text: '새로운 멘토링이 당신을 기다려요!',
        style: 'blue',
      },
      {
        type: 'image_link',
        url:
          'https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image3@3x.jpg',
      },
      {
        type: 'text',
        text: data.subject,
        markdown: true,
      },
      {
        type: 'divider',
      },
      {
        type: 'description',
        term: '접수기간',
        content: {
          type: 'text',
          text: data.period,
          markdown: false,
        },
        accent: true,
      },
      {
        type: 'description',
        term: '행사기간',
        content: {
          type: 'text',
          text: data.date,
          markdown: false,
        },
        accent: true,
      },
      {
        type: 'description',
        term: '현재인원',
        content: {
          type: 'text',
          text: data.applicants,
          markdown: false,
        },
        accent: true,
      },
      {
        type: 'description',
        term: '멘토',
        content: {
          type: 'text',
          text: data.mento,
          markdown: false,
        },
        accent: true,
      },
      {
        type: 'divider',
      },
      {
        type: 'text',
        text: data.description.substring(0, 450) + '(중략)...',
        markdown: false,
      },
      {
        type: 'divider',
      },
      {
        type: 'button',
        text: '이건 못 참지 바로 신청해',
        style: 'primary',
        action_type: 'submit_action',
        action_name: 'applicantMentoring',
        value: `{"link":"${data.link}","subject":"${data.subject}"}`,
      },
    ],
  };
};
