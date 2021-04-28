const mongoose = require('mongoose');
const Review = require('../models/review');

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

exports.insertUserReview = async (data) => {
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

  const newReview = new Review();
  newReview.mentoringId = data.mentoringId;
  newReview.mento = data.mento;
  newReview.userId = data.userId;
  newReview.review = data.review;
  newReview.score = data.score;
  const result = await newReview.save();

  return 1;
};

exports.getReviews = async (mento_name) => {
  return await Review.where('mento', mento_name);
};
