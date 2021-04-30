const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Listing } = require('../../db/models');
const { singleMulterUpload } = require('../../awsS3');

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];
router.get('/:id', asyncHandler(async(req,res)=> {
  const userInfo = await User.findByPk(req.params.id, {
    include: [{model: Listing}]
  })
  return res.json(userInfo)
}))
router.post(
  '',
  singleMulterUpload('image'),
  validateSignup,
  asyncHandler(async (req, res) => {
    const profileImageUrl = await singlePublicFileUpload(req.file);
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password, profileImageUrl });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);



module.exports = router;
