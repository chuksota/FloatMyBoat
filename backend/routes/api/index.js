const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const destinationsRouter = require('./destinations')
router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/destinations', destinationsRouter )

module.exports = router;
