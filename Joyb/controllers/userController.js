const User = require('../models/user');
const bcrypt = require ('bcrypt');
const signToken = require('../controllers/auth');
const validatePassword = require('../utils/helper').validatePasssword;
const validateEmail = require('../utils/helper').validateEmail;
const generatePassword = require('../utils/helper').generatePassword;
const generateEmailTemplate = require('../utils/helper').generateEmailTemplate;

module.exports = {
  // create(req, res) {
  //   console.log('user', User);
  //   console.log(req.params);
  //   return User
  //     .create({
  //       firstName: req.params.firstName,
  //       lastName: req.params.lasttName,
  //       email: req.params.email,
  //       address: req.params.address,
  //       status: req.params.status,
  //     })
  //     .then(user => res.status(201).send(user))
  //     .catch(error => res.status(400).send(error));
  // },


  saveUser(req, res) {
        const firstName = req.body.firstName ? req.body.firstName.trim() : '';
        const lastName = req.body.lastName ? req.body.lastName.trim() : '';
        const email = req.body.email ? req.body.email.trim() : '';
        const password = req.body.password ? req.body.password.trim() : '';
        if (!firstName || !lastName || !email || !password) {
          return res
            .status(400)
            .send({ error: 'All inputs are required.' });
        }
      
        if (firstName.length > 30 || lastName.length > 30) {
          return res
            .status(400)
            .send({ error: 'First and last names must be less than 30 characters.' });
        }
      
        const emailValidationError = validateEmail(email);
        if (emailValidationError.length > 0) {
          return res
            .status(400)
            .send({ error: emailValidationError }); // array of errors
        }
      
        const passwordValidationError = validatePassword(password);
        if (passwordValidationError.length > 0) {
          return res
            .status(400)
            .send({ error: passwordValidationError });
        }
      
        User.findAll({
          where: { email }
        })
          .then((user) => {
            if (user.length > 0) {
              return res
              .status(400)
              .send({ error: 'The email is already registered.' });
            }
      
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
      
            const newUser = {
              firstName,
              lastName,
              email,
              password: hash,
              address,
              status
            };
      
            User.create(newUser)
              .then((data) => {
                return res.json({
                  token: signToken(data.id),
                  user: {
                    id: data.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    address: data.address,
                    status: data.status
                  },
                });
              })
              .catch((err) => {
                // console.error('Error on saving user: ', err);
                return res.status(400).send({ error: err.message });
              });
          })
          .catch((err) => {
            return res.status(400).send({ error: err.message });
          });
      }
    };
//   // Retrieve the authenticated user
// exports.getSingleUser = (req, res) => {
//   User.findById(req.user.id)
//     .then((user) => {
//       if (!user) {
//         // if no user is found it was not
//         // it was a valid JWT but didn't decode
//         // to a real user in our DB. Either the user was deleted
//         // since the client got the JWT, or
//         // it was a JWT from some other source
//         return res.status(401).send({ error: 'Unauthorized' });
//       }
//       // update req.user with fresh user from
//       // stale token data & never send password back!
//       // console.log('>>>>>\n', user)
//       // Receipt.findAll({
//       //   where: {
//       //     user_id: req.user.id,
//       //   },
//       // })
//       // .then((receipts) => {
//       //   if (receipts.length > 0) {
//       //     // console.log('<><><><><><>Receipt: \n\n', receipt[0]);
//       //     const purchasedProductIds = [];
//       //     receipts.forEach((receipt) => {
//       //       purchasedProductIds.push(receipt.product_id);
//       //     });

//           // return res.json({
//           //   id: user.id,
//           //   first_name: user.first_name,
//           //   last_name: user.last_name,
//           //   email: user.email,
//           //   purchasedProductIds,
//           // });
//         }
        
//         // return res.json({
//         //   id: user.id,
//         //   first_name: user.first_name,
//         //   last_name: user.last_name,
//         //   email: user.email,
//         // });
//       // }
//       )
//       // .catch((err) => {
//       //   // console.log('<><><><><><>ERROR RECEIPT: \n\n', err);
//       //   return res.status(400).send({ error: err.message });
//       // });
//     // })
//     // .catch((err) => {
//     //   // console.log('getSignedInUserData err!', err);
//     //   return res.status(400).send({ error: err.message });
//     // });
// };