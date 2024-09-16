import React, { useState } from "react";
import { addReview, validateReview } from "../services/addReviewApi";
import useModalStore from "../stores/modalStore";

const buttonStyle =
  "text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center";

function AddReviewModal() {
  const [review, setReview] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { toggleModal } = useModalStore();

  const onSubmit = async () => {
    const isValid = validateReview(review);

    if (!isValid.valid) {
      setErrorMsg(isValid.msg!);
    } else {
      setErrorMsg("");
      const liked = await addReview(review);
      toggleModal();
    }
  };

  return (
    <div className="bg-white rounded-lg px-6 py-4">
      <div className="mb-8">
        <label className="font-medium text-gray-900">
          What do you think of us?
        </label>
        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
          className="w-full h-64 resize-none outline-none bg-gray-100 border border-gray-300 text-sm rounded-lg focus:border-navy p-2.5"
        />
        <h3 className="text-sm italic text-red-700">{errorMsg}</h3>
      </div>

      <div className="flex flex-row gap-3">
        <button
          className={`${buttonStyle} bg-navy hover:bg-blue-900`}
          onClick={onSubmit}
        >
          Submit
        </button>
        <button
          onClick={toggleModal}
          className={`${buttonStyle} bg-red-400 hover:bg-red-500`}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AddReviewModal;
