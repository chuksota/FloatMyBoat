const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const {Listing} = require('../../db/models')


router.get('/:id', asyncHandler(async(req, res)=>{
  const listingDetails = await Listing.findByPk(req.params.id)
  return res.json(listingDetails)
}) )

module.exports = router
