/**
 * @author seonno
 * @brief
 *  사용자가 멘토링 한줄평을 성공적으로 남긴 경우
 *  사용자측에 보내는 성공메세지
 * @param conversationId
 *  채팅방 식별자
 * @param {mento, subject, review} data
 *  멘토이름, 멘토링 제목, 사용자의 리뷰
 * @returns
 *  멘토링 한줄평 등록 성공메세지
 */
module.exports = (conversationId, data) => {
  return {
    conversationId: conversationId,
    text: '멘토링 한줄평 등록 완료',
    blocks: [
      {
        type: 'header',
        text: '멘토링 한줄평 등록 완료',
        style: 'blue',
      },
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
        text: `*"${data.review}"* 한줄평이 등록되었습니다`,
        markdown: false,
      },
      {
        type: 'button',
        text: '멘토링 한줄평 검색',
        action_type: 'call_modal',
        action_name: 'review_search',
        value: '{"action_name":"review_search"}',
        style: 'default',
      },
    ],
  };
};
