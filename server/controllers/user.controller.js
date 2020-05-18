const httpStatus = require("http-status");
const db = require("../../config/sequelize");
const helper = require('../helpers/index');
const User = db.User;

console.log("\nHelper : ", helper)
/**
 * Load user and append to req.
 */
async function load(req, res, next, id) {
  try {
    const userFoundResponse = await User.findById(id);
    if (!userFoundResponse) {
      const e = new Error("User does not exist");
      e.status = httpStatus.NOT_FOUND;
      return next(e);
    }
    req.user = userFoundResponse; // eslint-disable-line no-param-reassign
    return next();
  } catch (error) {
    return next(error);
  }
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.firstName - The first name of user.
 * @property {string} req.body.lastName - The last name of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @property {string} req.body.address - The address of user.
 * @returns {User}
 */
function create(req, res, next) {
  const user = User.build({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    status: "active",
  });

  user
    .save()
    .then((savedUser) => res.json(savedUser))
    .catch((e) => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.firstName - The first name of user.
 * @property {string} req.body.lastName - The last name of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @property {string} req.body.address - The address of user.
 * @returns {User}
 */
function update(req, res, next) {
  const user = req.user;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.status = req.body.status;

  user
    .save()
    .then((savedUser) => res.json(savedUser))
    .catch((e) => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  const { limit = 20 } = req.query;
  User.findAll({ limit })
    .then((users) => res.json(users))
    .catch((e) => next(e));
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req, res, next) {
  const user = req.user;
  let firstName = req.user.firstName;
  user
    .destroy()
    .then(() => res.json(firstName))
    .catch((e) => next(e));
}

module.exports = {
  load,
  get,
  create,
  update,
  list,
  remove,
};
