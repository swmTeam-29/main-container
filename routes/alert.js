const router = require('express').Router();
const notification = require('../controllers/notification');

router.post('/mentoringAlert', notification.keyword, notification.mentoring);

router.get('/welcome', notification.welcome);

module.exports = router;
