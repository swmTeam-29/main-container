const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema( 
    {
    mentoringId: { type: Number, required: true }, // 멘토링 식별번호  
    mento: { type: String, required: true }, // 멘토님 성함
    userId: { type: Number, required: true }, // 멘티 식별번호
    review: { type: String, required: true }, // 리뷰 
    score: { type: Number, required: true, min: 0, max: 5 }, // 평점
    },
    { 
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

module.exports = mongoose.model('review', reviewSchema);