const mongoose = require('mongoose');
const Review = require('../models/review');

/**
 *  @author hojun
 */
mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database successfully');
    }
  }
);

/**
 *  @author hojun
 */
exports.insertUserReview = async (data) => {
  //mentoringId 가 10000인 경우 멘토링에 대한 평가가 아닌 멘토에 대한 평가. 제한없이 추가가능.
  if (mentoringId != 10000) {
    // Validation
    const oldReview = await Review.where({
      mentoringId: data.mentoringId,
      userId: data.userId,
    });

    //console.log(oldReview);

    if (Object.keys(oldReview).length !== 0) {
      //console.log('review already exists');
      return -1;
    }
  }

  const newReview = new Review();
  newReview.mentoringId = data.mentoringId;
  newReview.mento = data.mento;
  newReview.userId = data.userId;
  newReview.review = data.review;
  newReview.score = data.score;
  const result = await newReview.save();

  return 1;
};

/**
 *  @author hojun
 */
exports.getReviews = async (mento_name) => {
  return await Review.where('mento', mento_name);
};
