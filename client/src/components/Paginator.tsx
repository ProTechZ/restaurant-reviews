import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

function Paginator({
  currentPage,
  handlePrevPage,
  handleFirstPage,
  handleNextPage,
  handleLastPage,
}: {
  currentPage: number;
  handlePrevPage: () => void;
  handleFirstPage: () => void;
  handleNextPage: () => void;
  handleLastPage: () => void;
  
}) {
  return (
    <div className="flex items-center justify-center">
      <button onClick={handleFirstPage} disabled={currentPage === 1}>
        <MdOutlineKeyboardDoubleArrowLeft size={25} />
      </button>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <MdOutlineKeyboardArrowLeft size={25} />
      </button>
      <h1 className=" text-center w-20">
        Page <span className="font-bold"> {currentPage}</span>
      </h1>
      <button onClick={handleNextPage}>
        <MdOutlineKeyboardArrowRight size={25} />
      </button>
      <button onClick={handleLastPage}>
        <MdOutlineKeyboardDoubleArrowRight size={25} />
      </button>
    </div>
  );
}

export default Paginator;
