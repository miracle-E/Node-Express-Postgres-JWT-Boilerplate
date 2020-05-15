const router = require('express').Router();
const controller = require('../controllers/userController');
const auth = require('../controllers/auth');
const app = require('../../app');

const checkUser = [auth.decodeToken(), auth.getFreshUser()];
// router.route('/save')
//   .post(controller.saveUser);
router.route('/save')
.post(controller.saveUser(app));
  // app.post('/api', (req, res) => res.status(200).send({
  //       message: 'Welcome to the Joy&B API!',
  //     }));

// router.route('/account')
//   .get(checkUser, controller.getSingleUser)
//   .put(checkUser, controller.updateUser);

// router.route('/reset-password')
//   .post(controller.sendNewPassword);

module.exports = router;
  