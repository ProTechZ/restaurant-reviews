import React from "react";

function AddReviewModal({ toggleModal }: { toggleModal: () => void }) {
  return (
    <div className="bg-white border rounded-lg p-2 w-1/2 ">
      <form>
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-900">
            What do you think of us?
          </label>
          <textarea
            className="w-full h-48 resize-none outline-none bg-gray-100 border border-gray-300 text-sm rounded-lg focus:border-navy p-2.5"
            required
          />
        </div>

        <div className="flex flex-row gap-3">
          <button
            type="submit"
            className="text-white bg-navy hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
      </form>
    </div>
  );
}

export default AddReviewModal;
