import { Review } from "../index";
import ReviewItem from "./ReviewItem";

import { useEffect, useState } from "react";
import Paginator from "./Paginator";

import usePaginationStore from "../stores/paginationStore";

function ReviewsList({ reviewsList, pageLimit }: { reviewsList: Review[], pageLimit: number }) {
  const { currentPage, reviewsPerPage, handleNextPage, handlePrevPage } = usePaginationStore();
  const [showedReviews, setShowedReviews] = useState<Review[]>([]);

  // navigating the reviews with arrow keys
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNextPage(pageLimit);
      } else if (event.key === "ArrowLeft") {
        handlePrevPage();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  useEffect(() => {
    const startIdx = (currentPage - 1) * reviewsPerPage;
    const endIdx = startIdx + reviewsPerPage;

    setShowedReviews(reviewsList.slice(startIdx, endIdx));
    localStorage.setItem("currPage", currentPage.toString());
  }, [currentPage, reviewsList]);

  return (
    <div className="align-center pb-12">
      {showedReviews.map(({ review, liked }, ind) => (
        <ReviewItem key={ind} review={review} liked={liked} />
      ))}

    </div>
  );
}

export default ReviewsList;
