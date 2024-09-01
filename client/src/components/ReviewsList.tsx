import { Review } from "../index";
import ReviewItem from "./ReviewItem";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

function ReviewsList({ reviewsList }: { reviewsList: Review[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);

  const reviewsPerPage = 10;

  const handleNextPage = () =>
    setCurrentPage((prevPage) => (prevPage != 100 ? prevPage + 1 : 100));

  const handlePrevPage = () =>
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  // navigating the reviews with arrow keys
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNextPage();
      } else if (event.key === "ArrowLeft") {
        handlePrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const startIdx = (currentPage - 1) * reviewsPerPage;
    const endIdx = startIdx + reviewsPerPage;

    setFilteredReviews(reviewsList.slice(startIdx, endIdx));
  }, [currentPage, reviewsList]);

  return (
    <div>
      {filteredReviews.map(({ review, liked }, ind) => (
        <ReviewItem key={ind} review={review} liked={liked} />
      ))}

      <div className="absolute bottom-0">
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
