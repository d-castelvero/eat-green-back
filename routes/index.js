const express = require("express");

const greenRouter = require("./green");
const contactRouter = require("./contact");
const userRouter = require("./user");
const authRouter = require("./auth");

const router = express.Router();

router.use("/green", greenRouter);
router.use("/contact", contactRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
