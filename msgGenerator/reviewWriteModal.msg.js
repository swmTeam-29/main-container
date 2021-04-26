//data: mento, subject, 
exports.reviewWriteModalGenerator = (data) => {
  return {
    title: '멘토링 한줄평 작성',
    accept: '확인',
    decline: '취소',
    value: 'mentoring_review_write',
    blocks: [
      {
        "type": "label",
        "text": '*한줄평*',
        "markdown": true,
      },
      {
        "type": "input",
        "name": "user_review",
        "required": true,
        "placeholder": "내용을 입력해주세요",
      },
    ],
  };
};
  