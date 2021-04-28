const libKakaoWork = require('../libs/kakaoWork');
const mongodbController = require('../controllers/mongodb');

const reviewAsk = require('../msgGenerator/review/reviewAsk.msg');
const reviewSuccess = require('../msgGenerator/review/reviewSuccess.msg');
const reviewFailed = require('../msgGenerator/review/reviewFailed.msg');
const reviewSearchResult = require('../msgGenerator/review/reviewSearchResult.msg');

/**
 *  @author seonno
 *  @brief
 *    한줄평 db 등록후 성공/실패 메세지
 *  @details
 *    한줄평 db 등록에 성공하면 성공메세지 전송
 *    실패하면 에러코드에 따른 실패메세지 전송
 */
exports.sendReviewEnrollResult = async (req, res) => {
  //유저가 모달에서 submit한 경우 callback
  const { action_time, actions, message, react_user_id, value } = req.body;

  //value: yesterdaydata+userid+action_name
  //value에 한줄평, 별점 추가해서 db에 등록
  const conversationId = message.conversation_id;

  const value_json = JSON.parse(value);
  const temp_value_json = Object.assign(value_json, {
    review: actions.user_review,
    score: actions.user_score,
  });

  const err = await mongodbController.insertUserReview(temp_value_json);
  switch (err) {
    case 1:
      //db등록 성공
      const msg = reviewSuccess(conversationId, temp_value_json);
      break;

    default:
      //db 등록 실패
      const msg = reviewFailed(conversationId, temp_value_json, err);
      break;
  }
  await libKakaoWork.sendMessage(msg);
};

/**
 *  @author seonno
 *  @brief
 *    사용자가 정한 멘토님에 대한 모든 한줄평을 db에서 가져와서 메세지로 보낸다.
 */
exports.sendMentorReviews = async (req, res) => {
  //유저가 모달에서 submit한 경우 callback
  const { action_time, actions, message, react_user_id, value } = req.body;

  const conversationId = message.conversation_id;
  const mento = actions.mento;

  //멘토님 성함에 맞는 한줄평들 db에서 가져오기
  const reviews = await mongodbController.getReviews(mento);

  //멘토이름, 멘토링제목, 한줄평과 함께 한줄평 등록 성공메세지 보내기
  const msg = reviewSearchResult(conversationId, mento, reviews);
  await libKakaoWork.sendMessage(msg);
};

/**
 *  @author wongi
 *  @brief
 *    수강한 멘토링에 대한 review요청 메세지를 보내는 API
 *  @details
 *    어제의 멘토링, 참석 멘티의 이름을 req data로 전달받아 review요청 메세지를 챗봇을 통해 전달
 *  @date   2021-04-28
 */
exports.sendReviewMessage = async (req, res, next) => {
  const data = req.body;
  const yesterdayMentoring = data.yesterdayMentoring;

  for (const mentoring of yesterdayMentoring) {
    const mentoringInfo = mentoring.data;
    // 불필요한 데이터를 제거하고, 사용할 데이터만으로 msg data 구성
    var reviewObj = {
      mentoringId: mentoringInfo.id,
      mento: mentoringInfo.mento,
      subject: mentoringInfo.subject,
    };

    // 참여한 멘티이름
    const attendeesNames = mentoring.names;

    // workspace의 모든 이름을 가져옴
    const users = await libKakaoWork.getUserList();

    users.forEach(async function (user) {
      // 해당 mentoring에 참여하였던 멘티라면, review요청 메세지 전송
      if (attendeesNames.includes(user.name)) {
        const userConversation = await libKakaoWork.openConversations({
          userId: user.id,
        });

        // 식별하기 위한 userId값을 msg data에 추가
        const data = Object.assign({}, reviewObj);
        Object.assign(data, { userId: Number(user.id) });

        const msg = reviewAsk(userConversation.id, data);
        libKakaoWork.sendMessage(msg);
      }
    });
  }

  res.status(200).send({ result: 'ok' });
};
