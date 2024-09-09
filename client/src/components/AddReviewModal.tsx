import React, { useState } from "react";
import { validateReview } from "../services/addReviewApi";

function AddReviewModal({ toggleModal }: { toggleModal: () => void }) {
  const [review, setReview] = useState("");
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = () => {
    const isValid = validateReview(review)
    console.log(isValid)
    if (!isValid.valid) {
      setErrorMsg(isValid.msg!)
      
    } else {
      setErrorMsg('')
      console.log('yay')
    }

  };

  return (
    <div className="bg-white rounded-lg p-4 w-1/2 ">
      <div className="mb-5">
        <label className="font-medium text-gray-900">
          What do you think of us?
        </label>
        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
          className="w-full h-48 resize-none outline-none bg-gray-100 border border-gray-300 text-sm rounded-lg focus:border-navy p-2.5"
        />
        <h3 className="text-sm italic text-red-700">{errorMsg}</h3>
      </div>

      <div className="flex flex-row gap-3">
        <button
          className="text-white bg-navy hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={onSubmit}
        >
          Submit
        </button>
        <button
          onClick={toggleModal}
          className="text-white bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AddReviewModal;
