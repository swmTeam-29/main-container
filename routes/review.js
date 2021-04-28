const router = require('express').Router();
const review = require('../controllers/review');

router.post('/sendReviewMessage', review.sendReviewMessage);

module.exports = router;
