import { Review } from "..";

export const getReviewsList = async (): Promise<Review[]> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/reviews/list`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const results = await response.json();

    return results["results"];
  } catch (e) {
    console.error((e as Error).message);
  }

  return [];
};
