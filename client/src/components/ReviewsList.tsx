import { Review } from "../index";
import ReviewItem from "./ReviewItem";

function ReviewsList({ reviewsList }: { reviewsList: Review[] }) {
  return (
    <div className="">
      <header className="">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Welcome to React
        </h1>
        {reviewsList.map(({ review, liked }, ind) => (
          <ReviewItem key={ind} review={review} liked={liked} />
        ))}
      </header>
    </div>
  );
}

export default ReviewsList;
