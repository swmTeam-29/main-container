const reviewResultBlock = require('./reviewResultBlock.msg');

/**
 * @author seonno
 * @brief
 *  사용자가 요청한 멘토님의 한줄평을 모두 출력
 * @param conversationId
 *  채팅방 식별자
 * @param mento
 *  멘토이름
 * @param reviews
 *  사용자의 리뷰 배열
 * @returns
 *  멘토님의 한줄평 모두와 새로운 검색버튼
 */
module.exports = (conversationId, mento, reviews) => {
  const msg = {
    conversationId: conversationId,
    text: '멘토링 한줄평 등록 완료',
    blocks: [
      {
        type: 'header',
        text: `${mento} 멘토님에 대한 한줄평`,
        style: 'blue',
      },
    ],
  };

  //한줄평 블록 하나씩 삽입
  reviews.forEach((item) => {
    msg.blocks.push(reviewResultBlock.divider());
    msg.blocks.push(reviewResultBlock.score(item.score));
    msg.blocks.push(reviewResultBlock.message(item.review));
  });

  msg.blocks.push({
    type: 'button',
    text: '멘토링 한줄평 검색',
    action_type: 'call_modal',
    action_name: 'review_search',
    value: '{"action_name": "review_search"}',
    style: 'default',
  });
  return msg;
};
