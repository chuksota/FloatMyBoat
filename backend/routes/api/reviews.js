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
  const {author, review, listingId} = req.body
  let newReview = await Review.create({
    author,
    review,
    listingId
  })
  return res.json(newReview)
}))

router.delete('/:id', asyncHandler(async(req,res)=>{
  const review = await Review.findByPk(req.params.id)
  await review.destroy()
  res.status(204).end()
}))


module.exports = router
