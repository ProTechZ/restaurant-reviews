import { Review } from "..";

function ReviewItem({ review }: Review) {
  return (
    <div className="border-b-2 border-navy p-3">      
      <h1>{review}</h1>
    </div>
  );
}

export default ReviewItem;
