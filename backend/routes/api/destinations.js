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


router.post('/listings', asyncHandler(async(req, res)=>{
  let {description, price, boatType, address, userId, destinationId} = req.body

  let newListing = await Listing.create({
    description,
    price,
    boatType,
    address,
    userId,
    destinationId
  })
 return  res.json(newListing)
}))


router.put('/listings/:listingId', asyncHandler(async(req, res)=>{
  let {description, price, boatType, address} = req.body
  let updatedListing = await Listing.update({
    description,
    price,
    boatType,
    address
  })
  return res.json(updatedListing)
}))

router.delete('/listings/:id', asyncHandler(async (req,res)=>{
  const listing = await Listing.findByPk(req.params.id)
  await listing.destroy()
  res.status(204).end()
}))


module.exports = router;
