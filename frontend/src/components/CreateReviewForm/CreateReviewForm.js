
import { useState } from 'react';
import { useDispatch} from 'react-redux';

import { createReview } from '../../store/reviews';

import './CreateReviewForm.css';

const CreateReviewForm = ({id}) => {
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [author, setAuthor] = useState("")

  const resetFields = () => {
    setReview("")
    setAuthor('')
    return
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      author,
      review,
      listingId: id,
    };
    await dispatch(createReview(newReview))
    resetFields()
  };


  return (
    <section className="new-form-holder centered middled">
      <form className="review-form" onSubmit={handleSubmit}>
        <label className='create_review--label'>Author</label>
        <input className='create_review--input'
        type='text'
        value={author}
        onChange={e=>setAuthor(e.target.value)}/>
        <textarea
          className="create_review--input"
          type="text"
          placeholder="Leave a review..."
          value={review}
          onChange={e => setReview(e.target.value)} />

        <button className='create_review--button' type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreateReviewForm
