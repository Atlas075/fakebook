const router = require('express').Router();

const {
    addReaction,
    addReply,
    removeReaction,
    removeReply
} = require('../../controllers/reactions-controller')

router
.route('/:thoughtId')

router
.route('/:userId/:thoughtId')
.post(addReply)
.put(addReaction)
.delete(removeReaction)
module.exports = router;