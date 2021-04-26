const express = require('express')
const router = express.Router()
const {Destination} = require('../../db/models/')
const asyncHandler = require('express-async-handler')

router.get('/', asyncHandler(async(req, res)=>{
  let allDestinations = await Destination.findAll()
  return res.json({allDestinations})
}))

module.exports = router;
