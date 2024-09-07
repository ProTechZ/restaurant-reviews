import React from "react";

function AddReviewBtn() {
  return (
    <button
      className="bg-red-400 active:bg-red-500 rounded-xl px-3 py-1 "
      onClick={(e) => {
        console.log("hi");
      }}
    >
      <h1 className="text-xl text-white font-cursive py-2">
        Leave your review!
      </h1>
    </button>
  );
}

export default AddReviewBtn;
