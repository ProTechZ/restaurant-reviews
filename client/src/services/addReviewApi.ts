export const validateReview = (
  review: string
): { valid: boolean; msg?: string } => {
  console.log(review.trim().length);
  console.log(review.trim());

  if (!review.trim()) {
    return { valid: false, msg: "Review is invalid." };
  } else if (review.length < 15) {
    return { valid: false, msg: "Review should be at least 15 characters." };
  }

  return { valid: true };
};
