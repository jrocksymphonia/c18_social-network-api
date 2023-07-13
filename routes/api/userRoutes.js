const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/userController.js');

// `GET` all users
// `POST` a new user

// /api/users
router.route('/').get(getUsers).post(createUser);


// `GET` a single user by its `_id` and populated thought and friend data
// `PUT` to update a user by its `_id`
// `DELETE` to remove user by its `_id`
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);


// `POST` to add a new friend to a user's friend list
// `DELETE` to remove a friend from a user's friend list

// /api/users/:userId/friends/:friendId
router.route('/:userId/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;