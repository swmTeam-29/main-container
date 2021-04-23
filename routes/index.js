const express = require("express");
const router = express.Router();

const alert = require("./alert.js"); //알림 메세지용 route, 각 유저에게 먼저 메세지 발송 기능
const requestApi = require("./request.js"); //모달 발송용 route, 모달 폼 전송 기능
const callbackApi = require("./callback.js"); //작성된 모달 받을 후 기능용 route

router.use("/alert", alert);
router.use("/request", requestApi);
router.use("/callback", callbackApi);

module.exports = router;
