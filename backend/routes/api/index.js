const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const destinationsRouter = require('./destinations')
const listingsRouter = require('./listings');
const reviewsRouter = require('./reviews')
router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/destinations', destinationsRouter )

router.use('/listings', listingsRouter)

router.use('/reviews', reviewsRouter)

module.exports = router;
