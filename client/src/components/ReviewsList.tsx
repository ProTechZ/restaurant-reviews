import { Review } from "../index";
import ReviewItem from "./ReviewItem";

import { useEffect, useState } from "react";
import Paginator from "./Paginator";

import usePaginationStore from "../stores/paginationStore";

function ReviewsList({ reviewsList }: { reviewsList: Review[] }) {
  const { currentPage, reviewsPerPage, handleNextPage, handlePrevPage } = usePaginationStore();
  const [showedReviews, setShowedReviews] = useState<Review[]>([]);

  const pageLimit = Math.ceil(reviewsList.length / reviewsPerPage);

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

      <div className="absolute bottom-4 left-0 w-full justify-center">
        <Paginator pageLimit={pageLimit}/>
      </div>
    </div>
  );
}

export default ReviewsList;
