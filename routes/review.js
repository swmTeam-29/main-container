const router = require('express').Router();
const mentoringReview = require('../controllers/mentoringReview');

router.post('/sendReviewMessage', mentoringReview.sendReviewMessage);

module.exports = router;
