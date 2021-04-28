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

exports.insertUserReview = (data) => {
  const newReview = new Review();
  newReview.mentoringId = data.mentoringId;
  newReview.mento = data.mento;
  newReview.userId = data.userId;
  newReview.review = data.review;
  newReview.score = data.score;
  newReview.save().then((review) => {
    res.json({
      data: newReview,
    });
  });
};

exports.getReviews = async (mento_name) => {
  return await Review.where('mento', mento_name);
};
