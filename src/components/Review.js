export default function Review({movieTitle, thisMovieReviews}) {
console.log(thisMovieReviews)

  return (
    <div>
      <p>{movieTitle}</p>
      {thisMovieReviews.map((review, index) => (
        <div key={index}>
          <p>{review}</p>
        </div>
      ))}
    </div>
  );
}
