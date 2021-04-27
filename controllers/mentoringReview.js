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
 *    작성된 멘토링 review를 DB에 저장
 *  @details
 *    작성된 멘토링 review를 DB에 저장
 *  @date   2021-04-28
 */
exports.writeReview = async (req, res, next) => {
    const reqData = req.body;

    var reviewObj = { mentoringId: reqData.mentoringId, 
                     mento: reqData.mento,
                     userId: reqData.userId,
                     review: reqData.review,
                     score: reqData.score
                    };

    // DB에 이미 존재 -> 이미 리뷰한 멘토링에 대해 다시 리뷰한경우 
    // if( db.exists( reviewObj ) ){
    //     return reviewFailed();
    //     res.status(409).send({ result: 'insert fail' });
    // }
    
    
    // database에 성공적으로 insert 되었다면 성공메세지
    //if( db.insert( reviewObj ) ){
        const userConversation = await libKakaoWork.openConversations( {userId: reqData.userId} );

        const data = Object.assign({}, reviewObj);
        Object.assign( data,  { subject: reqData.subject } );

        const msg = reviewSuccess(userConversation.id , data);
        libKakaoWork.sendMessage(msg);
    // }else{
    //     return reviewFailed();
    //     res.status(409).send({ result: 'insert fail' });
    // }

    res.status(200).send({ result: 'ok' });
};


