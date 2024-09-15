export const analyseReview = async (review: string) => {

  const response = await fetch(
    'http://localhost:8000/predict',
    {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ review }),
    }
  );
  const results = await response.json();

  return results
}
