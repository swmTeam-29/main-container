/**
 * @author seonno
 * @brief
 *  사용자가 멘토링 한줄평을 남길 수 있는 모달
 *  멘토성함도 같이 입력해야 함
 * @returns
 *  멘토링 한줄평 작성 및 제출 모달
 */
module.exports = (value) => {
  //value: yesterdaydata+userid+action_name
  value = Object.assign(value, {
    modal_name: 'review_write_by_welcome',
  });
  return {
    view: {
      title: '멘토링 한줄평 작성',
      accept: '한줄평 남기기',
      decline: '취소',
      value: JSON.stringify(value),
      blocks: [
        {
          type: 'label',
          text: '*멘토님 성함*',
          markdown: true,
        },
        {
          type: 'input',
          name: 'mento',
          required: true,
          placeholder: '성함을 입력해 주세요',
        },
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
        {
          type: 'label',
          text: '별점',
          markdown: true,
        },
        {
          type: 'select',
          name: 'user_score',
          options: [
            {
              text: '⭐⭐⭐⭐⭐',
              value: '5',
            },
            {
              text: '⭐⭐⭐⭐',
              value: '4',
            },
            {
              text: '⭐⭐⭐',
              value: '3',
            },
            {
              text: '⭐⭐',
              value: '2',
            },
            {
              text: '⭐',
              value: '1',
            },
          ],
          required: true,
          placeholder: '별점을 선택해주세요',
        },
      ],
    },
  };
};
