import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import usePaginationStore from "../stores/paginationStore";

function Paginator({
  currentPage,
  pageLimit,
  handlePrevPage,
  handleNextPage,
}: {
  currentPage: number;
  pageLimit: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}) {
  const { setCurrentPage } = usePaginationStore();

  const [displayCurrPage, setDisplayCurrPage] = useState(
    currentPage.toString()
  );

  useEffect(() => {
    setDisplayCurrPage(currentPage.toString());
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        <MdOutlineKeyboardDoubleArrowLeft size={25} className="text-navy" />
      </button>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <MdOutlineKeyboardArrowLeft size={25} className="text-navy" />
      </button>

      <h1 className="text-center w-20">
        Page{" "}
        <input
          name='paginator-input'
          className="w-8 text-center"
          value={displayCurrPage}
          onKeyDown={(e) => {
            const displayCurrPageInt = parseInt(displayCurrPage);

            if (e.key === "Enter") {
              if (
                displayCurrPage === "" ||
                displayCurrPageInt < 1 ||
                displayCurrPageInt > pageLimit
              ) {
                alert("That is not a valid page number.");
              } else {
                setCurrentPage(displayCurrPageInt);
              }
            }
          }}
          onChange={(e) => {
            const newPage = e.target.value;

            if (newPage === "") {
              setDisplayCurrPage("");
            } else {
              setDisplayCurrPage(newPage.toString());
            }
          }}
        />
      </h1>

      <button onClick={handleNextPage} disabled={currentPage === pageLimit}>
        <MdOutlineKeyboardArrowRight size={25} className="text-navy" />
      </button>
      <button
        onClick={() => setCurrentPage(pageLimit)}
        disabled={currentPage === pageLimit}
      >
        <MdOutlineKeyboardDoubleArrowRight size={25} className="text-navy" />
      </button>
    </div>
  );
}

export default Paginator;
