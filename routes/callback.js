const router = require("express").Router();
const libKakaoWork = require("../libs/kakaoWork");

router.post("/", async (req, res, next) => {
  res.status(200).send({ msg: "test" });
});

module.exports = router;
