const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
const friendRoutes = require('./friend-routes');
const reactionRoutes = require('./reaction-routes');


router.use('/comments', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/friends', friendRoutes);
router.use('/reaction', reactionRoutes);

module.exports = router;
