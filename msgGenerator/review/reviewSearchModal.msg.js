/**
 * @author seonno
 * @brief
 *  사용자가 특정 멘토님의 한줄평을 검색하는 모달. 알고싶은 멘토님 성함 입력
 * @returns
 *  멘토님의 한줄평 검색 모달
 */
module.exports = () => {
  return {
    view: {
      title: '한줄평 검색',
      accept: '검색',
      decline: '취소',
      value: '{"modal_name": "review_search"}',
      blocks: [
        {
          type: 'label',
          text: '멘토님 성함',
          markdown: true,
        },
        {
          type: 'input',
          name: 'mento',
          required: true,
          placeholder: '알고 싶은 멘토님의 성함을 입력하세요',
        },
      ],
    },
  };
};
