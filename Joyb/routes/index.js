const userController =  require('../controllers/userController');
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Joy&B API!',
  }));

  app.post('/api/users', (req,res) => {
    userController.create
    res.status(200).send({
      message: 'User profile created successfully!',
    })
  }
  );

//   app.post('/api/user', (req, res) => {
//     user_controller.create
//     res.status(200).send({
//       message: 'User profile created successfully!',
//     });
//   });
}; 


// const routes = require('express').Router();
// const user_route = require('../routes/users');
// routes.use("/user", user_route);

// module.exports = routes;





// var app = require('../../app');
// const userRouter = require ('./users');
// app.use('/users', userRouter);