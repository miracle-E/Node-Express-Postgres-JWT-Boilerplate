/// <reference types="node" />
const express = require("express");
const { validate } = require("express-validation");
const paramValidation = require("../../config/param-validation");
const {
  load: loadUser,
  list: listUsers,
  create: createUser,
  get: getUser,
  update: updateUser,
  remove: removeUser,
} = require("../controllers/user.controller");

const router = express.Router(); // eslint-disable-line new-cap
router
  .route("/")

  /** GET /api/users - Get list of users */
  .get(listUsers)

  /** POST /api/users - Create new user */
  .post(createUser);
// .post(validate(paramValidation.createUser), ()=> userCtrl.create);

router
  .route("/:userId")

  /** GET /api/users/:userId - Get user */
  .get(getUser)

  /** PUT /api/users/:userId - Update user */
  .put(updateUser)
  // .put(validate(paramValidation.updateUser), userCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(removeUser);

/** Load user when API with userId route parameter is hit */
router.param("userId", loadUser);

module.exports = router;
