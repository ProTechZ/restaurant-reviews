import { useState, useEffect } from "react";
import ReviewsList from "../components/ReviewsList";
import { Review } from "..";
import { getReviewsList } from "../services/reviewsListApi";

function Home() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getReviewsList();
      setReviewsList(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-cursive text-center text-secondary mb-6">
        REVIEWS
      </h1>

      <ReviewsList reviewsList={reviewsList} />
    </div>
  );
}

export default Home;
