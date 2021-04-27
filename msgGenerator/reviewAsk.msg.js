/**
 * @author seonno
 * @brief
 *  매일 한 번씩 하루간 있었던 멘토링에 참여한 학생들에게
 *  멘토링 한줄평을 요구하는 메세지를 반환함.
 * @param conversationId
 *  채팅방 식별자
 * @param {mento, subject} data
 *  멘토이름, 멘토링 제목
 * @return
 *  멘토링 한줄평 요구 메시지 블록
 */
module.exports = (conversationId, data) => {
  return {
    conversationId: conversationId,
    text: '멘토링 한줄평 권유',
    blocks: [
      {
        type: 'header',
        text: '오늘 참여했던 멘토링 어땠나요?',
        style: 'blue',
      },
      {
        type: 'text',
        text: `*${data.mento}* 멘토님의`,
        markdown: true,
      },
      {
        type: 'text',
        text: `${data.subject} 멘토링 어땠나요?`,
        markdown: false,
      },
      {
        type: 'button',
        text: '한줄평 쓰러가기',
        style: 'default',
        action_type: 'call_modal',
        action_name: 'review_request',
        value: `{"mento":"${data.mento}", "subject":"${data.subject}"}`,
      },
    ],
  };
};
