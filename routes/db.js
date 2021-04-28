const router = require('express').Router();
const reviewController = require('../controllers/review');

router.get('/', async (req, res) => {
    res.json({result: true});
})

router.post('/insert', async (req, res) => {
    console.log(req);
    const result = await reviewController.insertUserReview(req.body);

    res.json(result);
})

router.post('/find', async (req, res) => {
    const review = await reviewController.getReviews(req.body);

    res.json(review);
})

module.exports = router;