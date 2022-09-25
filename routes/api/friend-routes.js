const router = require('express').Router();

const {
    addFriend,
    removeFriend
} = require('../../controllers/friends-controller')

router
.route('/:userId')
.post(addFriend)
.delete(removeFriend)

module.exports = router;
