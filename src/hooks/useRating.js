function useRating(rating) {

  const totalStars = 5;
  const ratingProcent = (rating / totalStars) * 100;
  const styleRating = (ratingProcent === 0) ? { display: 'block' } : { display: 'none' }

  return [styleRating, ratingProcent]
}

export default useRating