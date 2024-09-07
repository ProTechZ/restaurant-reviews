import { Review } from "..";

function ReviewItem({ review }: Review) {
  return (
    <div className="border-b-2 border-red-200 p-3 hover:cursor-pointer ">      
      <h1 className="">{review}</h1>
    </div>
  );
}

export default ReviewItem;
