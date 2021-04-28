/**
 * @author seonno
 * @brief
 *  사용자가 멘토링 한줄평을 남길 수 있는 모달
 * @returns
 *  멘토링 한줄평 작성 및 제출 모달
 */
module.exports = () => {
  return {
    view: {
      title: '멘토링 한줄평 작성',
      accept: '한줄평 남기기',
      decline: '취소',
      value: '{"modal_name": "review_write"}',
      blocks: [
        {
          type: 'label',
          text: '*한줄평*',
          markdown: true,
        },
        {
          type: 'input',
          name: 'user_review',
          required: true,
          placeholder: '평가해 주세요',
        },
      ],
    },
  };
};
