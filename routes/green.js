const express = require("express");
const GreenController = require("../controllers/green.controller");

const router = express.Router({ mergeParams: true });

router.route("/").get(GreenController.getGreen);

module.exports = router;

