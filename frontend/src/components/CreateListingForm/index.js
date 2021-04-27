import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewListing } from '../../store/listings'

const createNewListing = () => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState("")
  const [boatType, setBoatType] = useState("")
  const [price, setPrice] = useState(0)
  const [imageUrl, setImageUrl] = useState("")
  const [numOfGuests, setNumOfGuests] = useState(0)

  const handleSubmit = async (e)=>{
      e.preventDefault()
      const newListing = {
        description,
        boatType,
        price,
        imageUrl,
        numOfGuests
      }
      dispatch(createNewListing(newListing))
      setDescription('')
      setBoatType('')
      setPrice(0)
      setImageUrl('')
      setNumOfGuests(0)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
        value={description}
        onChange={e=> setDescription(e.target.value)}
        type='text'
        placeholder='We want to know about your beautiful boat!' />
        <select value={boatType} onChange={e=>setBoatType(e.target.value)}>
          <option>Yacht</option>
          <option>Row Boat</option>
          <option>Dingy</option>
          <option>Speed Boat</option>
        </select>
        <input
          type='number'
          value={price}
          onChange={e=> setPrice(e.target.value)}
          placeholder="How much per day?" />
          <input
          type='number'
          value={numOfGuests}
          onChange={e=> setNumOfGuests(e.target.value)}/>

          <input
          type='text'
          value={imageUrl}
          onChange={e=>setImageUrl(e.target.value)}
          placeholder='Upload a picture of your boat!'/>
          <button type='submit'>Create new listing</button>
      </form>
    </div>
  )
}

export default createNewListing
