import { useState, useEffect } from "react";
import { Review } from "..";

import { getReviewsList } from "../services/reviewsListApi";

import ReviewsList from "../components/ReviewsList";
import Navbar from "../components/Navbar";

function Home() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [featuredReviews, setFeaturedReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getReviewsList();
      setReviewsList(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <div className="mb-2">
        <Navbar />
      </div>

      <div className="px-2 h-full">
        <ReviewsList reviewsList={reviewsList} />
      </div>
    </div>
  );
}

export default Home;
