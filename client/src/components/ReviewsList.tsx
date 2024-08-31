import { Review } from "../index";
import ReviewItem from "./ReviewItem";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

function ReviewsList({ reviewsList }: { reviewsList: Review[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
  const reviewsPerPage = 15;

  useEffect(() => {
    const startIdx = (currentPage - 1) * reviewsPerPage;
    const endIdx = startIdx + reviewsPerPage;

    setFilteredReviews(reviewsList.slice(startIdx, endIdx));
  }, [currentPage, reviewsList]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div>
      {filteredReviews.map(({ review, liked }, ind) => (
        <ReviewItem key={ind} review={review} liked={liked} />
      ))}

      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <AiFillLeftCircle />
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={filteredReviews.length < reviewsPerPage}
        >
          <AiFillRightCircle />
        </button>
      </div>
    </div>
  );
}

export default ReviewsList;
