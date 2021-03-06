import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewListing } from '../../store/listings'
import './CreateLists.css'
const CreateNewListing = ({id}) => {
  const user = useSelector(state=> state.session.user)
  const dispatch = useDispatch()
  const [description, setDescription] = useState("")
  const [boatType, setBoatType] = useState("")
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState("")
  const [numOfGuests, setNumOfGuests] = useState('')

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
        destinationId: id,
        userId: user.id
      }
      await dispatch(createNewListing(newListing))
      resetFields()
  }
  return (
    <div>
      <form className='createListingForm' onSubmit={handleSubmit}>
        <textarea
        className='create_list--inputs'
        value={description}
        onChange={e=> setDescription(e.target.value)}
        type='text'
        placeholder='We want to know about your beautiful boat!' />
        <select  className='create_list--inputs' value={boatType} onChange={e=>setBoatType(e.target.value)}>
          <option>Boat Type</option>
          <option>Yacht</option>
          <option>Row Boat</option>
          <option>Dingy</option>
          <option>Speed Boat</option>
        </select>
        <input
          type='number'
          value={price}
          onChange={e=> setPrice(e.target.value)}
          placeholder="How much per day?"
          className='create_list--inputs'
          />
          <input
          type='number'
          value={numOfGuests}
          onChange={e=> setNumOfGuests(e.target.value)}
          placeholder="How many passengers?"
          className='create_list--inputs'
          />
          <input
          type='text'
          value={imageUrl}
          onChange={e=>setImageUrl(e.target.value)}
          placeholder='Upload a picture of your boat!'
          className='create_list--inputs'
          />
          <button className='create_list--button'type='submit'>Create new listing</button>
      </form>
    </div>
  )
}

export default CreateNewListing
