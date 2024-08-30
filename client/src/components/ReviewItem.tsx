import { Review } from "..";

function ReviewItem({ review, liked }: Review) {
  return (
    <div className="">
      <header className="">
        <h1 className="">
          {review} - {liked}
        </h1>
      </header>
    </div>
  );
}

export default ReviewItem;
