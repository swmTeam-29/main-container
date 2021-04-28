//이미 리뷰한 멘토님을 다시 리뷰한경우 등
//뭔가 문제가 있어서 에러
const ErrCode_alreadyReviewed = -1; //사용자가 이미 평가한 멘토링에 대해 다시 리뷰한경우
module.exports = (conversationId, data, err) => {
  const msg = {
    conversationId: conversationId,
    text: '멘토링 한줄평 등록 실패',
    blocks: [
      {
        type: 'header',
        text: '멘토링 한줄평 등록 실패',
        style: 'red',
      },
    ],
  };
  switch (err) {
    //사용자가 이미 평가한 멘토링인 경우
    case ErrCode_alreadyReviewed: {
      const blocks = [
        {
          type: 'text',
          text: `*${data.mento}* 멘토님의`,
          markdown: true,
        },
        {
          type: 'text',
          text: `${data.subject} 멘토링에 대한`,
          markdown: false,
        },
        {
          type: 'text',
          text:
            '한줄평을 이미 작성하셨습니다. 한 멘토링에 대해 여러번 작성하실 수 없습니다.',
          markdown: false,
        },
      ];
      blocks.forEach((block) => msg.blocks.push(block));
    }
  }
  return msg;
};
