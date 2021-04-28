
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReview } from '../../store/reviews';

import './CreateReviewForm.css';

const CreateReviewForm = () => {

  const dispatch = useDispatch();
  
  const [review, setReview] = useState("");
  const [author, setAuthor] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      author,
      review,

    };
    let createdReview = await dispatch(createReview(newReview))
    setReview("")
  };


  return (
    <section className="new-form-holder centered middled">
      <form className="review-form" onSubmit={handleSubmit}>
        <input value={author}onChange={e=> setAuthor(e.target.value)} placeholder='Name'></input>
        <textarea
          className="review-input"
          type="text"
          placeholder="Leave a review..."
          value={review}
          onChange={e => setReview(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreateReviewForm
