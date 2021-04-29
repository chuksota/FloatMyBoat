const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const {Review} = require('../../db/models')

router.get('/:id', asyncHandler(async(req, res)=>{
  const listingReviews = await Review.findAll({
    where: {
      listingId: req.params.id
    }
  })
  return res.json(listingReviews)
}))

router.post('/', asyncHandler(async(req, res)=>{
  const {review, userId, listingId} = req.body
  let newReview = await Review.create({
    review,
    userId,
    listingId
  })
  return res.json(newReview)
}))



module.exports = router
