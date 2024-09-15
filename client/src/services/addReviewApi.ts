export const validateReview = (
  review: string
): { valid: boolean; msg?: string } => {
  if (!review.trim()) {
    return { valid: false, msg: "Review is invalid." };
  } else if (review.length < 15) {
    return { valid: false, msg: "Review should be at least 15 characters." };
  }

  return { valid: true };
};

export const addReview = async (review: string) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/reviews/add`,
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ review }),
      }
    );
    const {liked} = await response.json();
    return liked
  } catch (e) {
    console.error((e as Error).message);
  }
};
