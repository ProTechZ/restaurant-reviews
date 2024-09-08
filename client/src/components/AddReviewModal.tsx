import React from "react";

function AddReviewModal() {
  return (
    <form className="bg-white border rounded-lg border-black justify-center p-2 w-1/2">
      <div className="mb-5">
        <label className="block mb-2 font-medium text-gray-900">
          What do you think of us?
        </label>
        <textarea
          className="w-full resize-none outline-none bg-gray-100 border border-gray-300 text-sm rounded-lg focus:border-navy p-2.5"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-navy hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
}

export default AddReviewModal;
