import React, { useState } from "react";
import useModalStore from "../stores/modalStore";
import useFeedbackStore from "../stores/feedbackStore";

const buttonStyle =
  "text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center";

function FeedbackModalSection() {
  const [review, setReview] = useState("");
  const { closeModal } = useModalStore();
  const { closeFeedback } = useFeedbackStore();

  const onSubmit = async () => {
    console.log(
      "You found this! 😂😂\nIf you're wondering, we don't actually care about your feedback!"
    );
    closeModal();
    closeFeedback();
  };

  const onClose = () => {
    closeModal();
    closeFeedback();
  };

  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className=" flex-col flex gap-5">
        <label className="font-medium italic">
          We're sorry to hear that you feel that way.
        </label>

        <div>
          <label className="text- size-small">
            We would be glad for any feedback!
          </label>

          <textarea
            onChange={(e) => setReview(e.target.value)}
            value={review}
            className="w-full h-36 resize-none outline-none bg-gray-100 border border-gray-300 text-sm rounded-lg focus:border-navy p-2.5"
          />
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <button
          className={`${buttonStyle} bg-navy hover:bg-blue-900`}
          onClick={onSubmit}
        >
          Send
        </button>
        <button
          onClick={onClose}
          className={`${buttonStyle} bg-red-400 hover:bg-red-500`}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default FeedbackModalSection;