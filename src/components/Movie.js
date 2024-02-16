import React, { useEffect, useState } from "react";
import ReviewsForm from "./ReviewForm"; // Importing the ReviewsForm component
import { week12API } from "../rest/week16Api";

const Movie = ({ movie }) => {
  // Setting up state for movie rating
  const [movieRating, setMovieRating] = useState(movie.rating);
// state to hold the reviews
const [reviews, setReviews] = useState([]);

console.log(`This is the Movie: `, movie)
  // Destructuring movie object to get specific properties
  const { id, image, title, about } = movie;

  const handleSetRating = () => {
    setMovieRating(5);
  };

  useEffect(() => {
    getReviews();
  }, []);

const getReviews = async () => {
  try {
    const response = await week12API.get();
    console.log(response.data);
    setReviews(response.data);
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}

  return (
    <div>
      {/* Displaying the movie title and movie image*/}
      <h2>{title}</h2>

      <img src={image} className="img" alt={`${title} Movie Poster`} />

      <ReviewsForm movieTitle={title} movieId={id} reviews={reviews} />

      <p>{about}</p>

      <p>Movie Rating: {movieRating}</p>
    </div>
  );
}


export default Movie;
