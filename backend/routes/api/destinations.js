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


router.post('/:id/listings', asyncHandler(async(req, res)=>{
  let {description, price, boatType, address} = req.body

  let newListing = await Listing.create({
    description,
    price,
    boatType,
    address
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
  return await Listing.delete({where: {id: req.params.id}})
}))


module.exports = router;
