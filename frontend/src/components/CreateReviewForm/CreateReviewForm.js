import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReview } from '../../store/reviews';

import './CreateReviewForm.css';

const CreateReviewForm = ({listingId, user}) => {

  const dispatch = useDispatch();

  const [review, setReview] = useState("");

  const resetFields = () => {
    setReview("")
    return
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review,
      listingId,
      userId: user.id

    };
    await dispatch(createReview(newReview))
    resetFields()
  };


  return (
    <section className="new-form-holder centered middled">
      <form className="review-form" onSubmit={handleSubmit}>
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
