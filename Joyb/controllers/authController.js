// const User = require('../models').users;
const signToken = require('./auth').signToken;

exports.signin = (req, res) => {
  // req.user will be there from the middleware
  // verify user. Then we can just create a token
  // and send it back for the client to consume
  console.log('exports.signin ', req.user.id);

  const token = signToken(req.user.id);
  res.json({
    token,
    user: {
      username: req.user.username,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      address: req.user.address,
      phone: req.user.phone,
      email: req.user.email,
    },
  });
};
