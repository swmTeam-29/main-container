const router = require('express').Router();
const mongodb = require('../controllers/mongodb');

router.get('/', async (req, res) => {
  res.json({ result: true });
});

router.post('/insert', async (req, res) => {
  console.log(req);
  const result = await mongodb.insertUserReview(req.body);

  res.json(result);
});

router.post('/find', async (req, res) => {
  const review = await mongodb.getReviews(req.body);

  res.json(review);
});

module.exports = router;
