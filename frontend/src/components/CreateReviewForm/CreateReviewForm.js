import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createReview } from '../../store/reviews';

import './CreateReviewForm.css';

const CreateReviewForm = ({id}) => {
  console.log(id)
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const sessionUser = useSelector(state=>state.session.user)
  const resetFields = () => {
    setReview("")
    return
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review,
      listingId: id,
      userId: sessionUser.id

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
