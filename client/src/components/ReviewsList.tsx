import { Review } from "../index";
import ReviewItem from "./ReviewItem";

import { useEffect, useState } from "react";
import Paginator from "./Paginator";

function ReviewsList({ reviewsList }: { reviewsList: Review[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showedReviews, setShowedReviews] = useState<Review[]>([]);

  const reviewsPerPage = 10;

  const handleNextPage = () =>
    setCurrentPage((prevPage) => (prevPage !== 100 ? prevPage + 1 : 100));

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

    setShowedReviews(reviewsList.slice(startIdx, endIdx));
  }, [currentPage, reviewsList]);

  return (
    <div className="align-center pb-12">
      {showedReviews.map(({ review, liked }, ind) => (
        <ReviewItem key={ind} review={review} liked={liked} />
      ))}

      <div className="absolute bottom-4 left-0 w-full justify-center">
        <Paginator
          pageLimit={Math.ceil(reviewsList.length / reviewsPerPage)}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          setCurrPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default ReviewsList;
