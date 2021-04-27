const libKakaoWork = require('../libs/kakaoWork');
const reviewAsk = require('../msgGenerator/reviewAsk.msg');
const reviewSuccess = require('../msgGenerator/reviewSuccess.msg');
const reviewFailed = require('../msgGenerator/reviewFailed.msg');

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
    
    for( const mentoring of yesterdayMentoring ) {
        const mentoringInfo = mentoring.data;
        // 불필요한 데이터를 제거하고, 사용할 데이터만으로 msg data 구성
        var reviewObj = { mentoringId: mentoringInfo.id,
                         mento: mentoringInfo.mento, 
                         subject: mentoringInfo.subject,
                        };
        
        // 참여한 멘티이름
        const attendeesNames = mentoring.names;
        
        // workspace의 모든 이름을 가져옴
        const users = await libKakaoWork.getUserList();

        users.forEach( async function(user){
            // 해당 mentoring에 참여하였던 멘티라면, review요청 메세지 전송
            if( attendeesNames.includes( user.name ) ){
                const userConversation = await libKakaoWork.openConversations( {userId: user.id} );
                
                // 식별하기 위한 userId값을 msg data에 추가
                const data = Object.assign({}, reviewObj);    
                Object.assign( data,  { userId: Number(user.id) } );

                const msg = reviewAsk(userConversation.id , data);
                libKakaoWork.sendMessage(msg);
            }
        });
    }
    
    res.status(200).send({ result: 'ok' });
};



/**
 *  @author wongi
 *  @brief
 *      작성된 멘토링 review를 DB에 저장
 *  @param {mentoringId, mento, userId, review, score} data
 *      멘토링 식별번호, 멘토이름, 멘티 이름, 멘티 리뷰, 평점
 *  @returns
 *      멘토링 등록 성공, 실패 여부 (boolean)
 *  @date   2021-04-28
 */
exports.insertUserReview = (data) => {
    var reviewObj = { mentoringId: data.mentoringId, 
                     mento: data.mento,
                     userId: data.userId,
                     review: data.review,
                     score: data.score
                    };

    // DB에 이미 존재 -> 이미 리뷰한 멘토링에 대해 다시 리뷰한경우 
    // if( db.exists( reviewObj ) ){
    //     return false;
    // }
    
    
    // database에 성공적으로 insert 되었다면 성공메세지
    //if( db.insert( reviewObj ) ){
        return true;
    // }else{
    //     return false;
    // }
};



/**
 *  @author wongi
 *  @brief
 *      해당 멘토님의 모든 평가를 DB에서 찾음
 *  @param  mento
 *      멘토이름
 *  @returns { review, score } reviews
 *      리뷰, 평점 배열로 반환
 *  @date   2021-04-28
 */
exports.getReviews = (mento) =>{
    // var reviewObjs = db.findByMento( mento );
    
    // var reviews = []
    // reviewObjs.forEach( function(reviewObj){
    //     reviews.push( { 
    //         review: reviewObjs.review, 
    //         score: reviewObjs.score
    //      } );
    // });

    var reviews = [
        {
            review:"테스트 리뷰1",
            score:4
        },
        {
            review:"테스트 리뷰2 테스트 리뷰2 테스트 리뷰2 테스트 리뷰2",
            score:2
        },
        {
            review:"테스트 리뷰3 테스트 리뷰3 테스트 리뷰3 테스트 리뷰3 테스트 리뷰3 테스트 리뷰3 테스트 리뷰3",
            score:5
        }
    ];

    return reviews;
}