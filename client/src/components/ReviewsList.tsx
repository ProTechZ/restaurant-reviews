import { Review } from "../index";
import ReviewCard from "./ReviewCard";

import { useEffect, useState } from "react";

import usePaginationStore from "../stores/paginationStore";

function ReviewsList({
  reviewsList,
  pageLimit,
}: {
  reviewsList: Review[];
  pageLimit: number;
}) {
  const { currentPage, reviewsPerPage, handleNextPage, handlePrevPage } =
    usePaginationStore();
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
    console.log(reviewsPerPage, pageLimit);
  }, [currentPage, reviewsList]);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5">
      {showedReviews.map(({ review, liked }, ind) => (
        <ReviewCard key={ind} review={review} liked={liked} />
      ))}
    </div>
  );
}

export default ReviewsList;
