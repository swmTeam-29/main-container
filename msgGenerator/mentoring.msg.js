exports.mentoringMsgGenerator = (conversationId, data) => {
  return {
    conversationId: conversationId,
    text: '멘토링 알림',
    blocks: [
      {
        type: 'header',
        text: '멘토링이 등록되었습니다.',
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
        term: '신청인원',
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
        type: 'button',
        text: '신청하기',
        style: 'primary',
        action_type: 'submit_action',
        action_name: 'applicantMentoring',
        value: data.link,
      },
    ],
  };
};
