import React, { useState } from "react";
import { week12API } from "../rest/week16Api";

const ReviewForm = ({ movieTitle, movieId, reviews }) => {
  console.log(week12API);
console.log(movieTitle , movieId , reviews)
  const [reviewText, setReviewText] = useState("");

  let thisMoviesReviews;

  if (reviews) {
    thisMoviesReviews = reviews.filter((review) => review.movieId === movieId);
  }

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

// THIS FUNCTION NEEDS TO BE FINISHED
  const addReview = async (newReview) => {
    console.log(newReview);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      let newReview = {
        movieId: movieId,
        reviews: reviewText,
      };  
      

      addReview({ movieId, reviewText });

      setReviewText("");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  // Nested Review component
  const Review = ({ text }) => <p>{text}</p>;
 console.log(thisMoviesReviews)
  return (
    <div>
      {/* Review Form */}
      <form onSubmit={handleSubmit}>
        <textarea
          rows="3"
          placeholder={`Leave a review for ${movieTitle}...`}
          value={reviewText}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit Review</button>
      </form>

      {/* Display the submitted review using the nested Review component */}
      {thisMoviesReviews.length >= 1 ? <Review movieTitle={movieTitle} thisMoviesReviews={thisMoviesReviews} />:null}
    </div>
  );
};

export default ReviewForm;
