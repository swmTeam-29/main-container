/**
 * @author seonno
 * @brief
 *  사용자의 리뷰 하나가 담긴 text블럭
 * @param {string} review
 *  멘토이름, 사용자의 리뷰 배열
 */
module.exports = (review) => {
  return {
    type: 'text',
    text: review,
    markdown: false,
  };
};
