import { useState } from "react";
import { addReview, validateReview } from "../services/addReviewApi";
import useModalStore from "../stores/modalStore";
import useFeedbackStore from "../stores/feedbackStore";

const buttonStyle =
  "text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center";

function AddReviewModalSection() {
  const [review, setReview] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { closeModal } = useModalStore();
  const { goToFeedback } = useFeedbackStore();

  const onSubmit = async () => {
    const isValid = validateReview(review);

    if (!isValid.valid) {
      setErrorMsg(isValid.msg!);
    } else {
      setErrorMsg("");
      const liked = await addReview(review);

      if (liked === "0") {
        goToFeedback();
      } else {
        closeModal();
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-medium text-gray-900">What do you think of us?</h1>

        <textarea
          name="review-input"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          className="w-full h-64 resize-none outline-none bg-gray-100 border border-gray-300 text-sm rounded-lg focus:border-navy p-2.5"
        />
        <h3 className="text-sm italic text-red-700">{errorMsg}</h3>
      </div>

      <div className="flex flex-row gap-3">
        <button
          onClick={closeModal}
          className={`${buttonStyle} bg-red-400 hover:bg-red-500`}
        >
          Close
        </button>
        <button
          className={`${buttonStyle} bg-navy hover:bg-blue-900`}
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddReviewModalSection;
