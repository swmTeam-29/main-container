const router = require('express').Router();
const notification = require('../controllers/notification');

router.post('/mentoringAlert', notification.keyword, notification.mentoring);

module.exports = router;
