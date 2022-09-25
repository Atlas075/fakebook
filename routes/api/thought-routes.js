const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughts-controller')

const {
    addReaction,
    addReply,
    removeReaction,
    removeReply
} = require('../../controllers/reactions-controller')


router
.route('/:userId')
.get(getAllThought)
.post(createThought)

router
.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)
.post(addReply)
.post(addReaction)

router
.route('/:userId/:thoughtId/:replyId')
.delete(removeReply)

router
.route('/:userId/:thoughtId/:reactionId')
.delete(removeReaction)

module.exports = router;