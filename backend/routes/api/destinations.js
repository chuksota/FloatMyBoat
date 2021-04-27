const express = require('express')
const router = express.Router()
const { Destination, Listing } = require('../../db/models/')
const asyncHandler = require('express-async-handler')

router.get('/', asyncHandler(async (req, res) => {
  let allDestinations = await Destination.findAll()
  return res.json({ allDestinations })
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const allListings = await Listing.findAll({
    where: {
      destinationId: req.params.id
    }
  })
  return res.json({ allListings })
}))

module.exports = router;
