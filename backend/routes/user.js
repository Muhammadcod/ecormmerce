const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// router.get('/', userCtrl.getUsers);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/current', userCtrl.getCurrentUser);

/*router.get('/user/:userId', userCtrl.allowIfLoggedin, userCtrl.getUser);
router.get(
  '/users',
  userCtrl.allowIfLoggedin,
  userCtrl.grantAccess('readAny', 'profile'),
  userCtrl.getUsers
);
router.put(
  '/user/:userId',
  userCtrl.allowIfLoggedin,
  userCtrl.grantAccess('updateAny', 'profile'),
  userCtrl.updateUser
);
router.delete(
  '/user/:userId',
  userCtrl.allowIfLoggedin,
  userCtrl.grantAccess('deleteAny', 'profile'),
  userCtrl.deleteUser
);*/

module.exports = router;
