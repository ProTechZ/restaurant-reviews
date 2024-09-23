import { Review } from "..";

function ReviewCard({ review }: Review) {
  return (
    <div className="bg-white rounded-r-lg p-5 shadow-lg border-l-4 border-orange-600 transition-transform duration-200 hover:-translate-y-1">
      <h1 className="text-base text-gray-800 leading-relaxed">{review}</h1>
    </div>
  );
}

export default ReviewCard;
