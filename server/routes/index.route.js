const express = require("express");
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");

// exports : router = express.Router(); // eslint-disable-line new-cap
var router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Joy&B API!",
  })
);

// mount user routes at /users
router.use("/users", userRoutes);

// mount auth routes at /auth
router.use("/auth", authRoutes);

module.exports = router;
