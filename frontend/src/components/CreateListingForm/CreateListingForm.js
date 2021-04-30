import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewListing } from '../../store/listings'

const CreateNewListing = (props) => {
  const user = useSelector(state=> state.session.user)
  console.log(props.id)
  const dispatch = useDispatch()
  const [description, setDescription] = useState("")
  const [boatType, setBoatType] = useState("")
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState("")
  const [numOfGuests, setNumOfGuests] = useState('')
  const [address, setAddress] = useState('')

  const resetFields = () => {
      setDescription('')
      setBoatType('')
      setPrice('')
      setImageUrl('')
      setNumOfGuests('')
  }

  const handleSubmit = async (e)=>{
      e.preventDefault()
      const newListing = {
        description,
        boatType,
        price: Number.parseInt(price),
        imageUrl,
        numOfGuests: Number.parseInt(numOfGuests),
        address,
        destinationId: props.id,
        userId: user.id
      }
      await dispatch(createNewListing(newListing))
      resetFields()
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
          value={address}
          onChange={e=>setAddress(e.target.value)}
          placeholder='Give us an address'/>
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

export default CreateNewListing
