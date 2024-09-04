import { Review } from "../index";
import ReviewItem from "./ReviewItem";

import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

function Paginator({
  currentPage,
  handlePrevPage,
  handleNextPage,
}: {
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3" >
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <MdOutlineKeyboardArrowLeft size={25} />
      </button>
      <h3  className="">Page {currentPage}</h3>
      <button onClick={handleNextPage}>
        <MdOutlineKeyboardArrowRight size={25} />
      </button>
    </div>
  );
}

export default Paginator;
