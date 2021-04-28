/**
 * @author seonno
 * @brief
 *  사용자의 리뷰 하나가 담긴 description 블럭
 * @param {int} score
 *  사용자 리뷰
 */
exports.score = (score) => {
  const stars = '⭐'.repeat(score);

  return {
    type: 'description',
    term: '평점',
    content: {
      type: 'text',
      text: stars,
      markdown: false,
    },
    accent: true,
  };
};

/**
 * @author seonno
 * @brief
 *  사용자의 평점(별) 담긴 description 블럭
 * @param {string} review
 *  사용자 평점
 */
exports.message = (review) => {
  return {
    type: 'description',
    term: '한줄평',
    content: {
      type: 'text',
      text: review,
      markdown: false,
    },
    accent: true,
  };
};

exports.divider = () => {
  return {
    type: 'divider',
  };
};
