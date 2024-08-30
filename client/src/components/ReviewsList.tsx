import { Review } from "../index";
import ReviewItem from "./ReviewItem";

function ReviewsList({ reviewsList }: { reviewsList: Review[] }) {
  return (
    <div className="">
      {reviewsList.map(({ review, liked }, ind) => (
        <ReviewItem key={ind} review={review} liked={liked} />
      ))}
    </div>
  );
}

export default ReviewsList;
