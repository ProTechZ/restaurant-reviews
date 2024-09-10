import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

function Paginator({
  currentPage,
  pageLimit,
  setCurrPage,
  handlePrevPage,
  handleNextPage,
}: {
  currentPage: number;
  pageLimit: number;
  setCurrPage: (value: React.SetStateAction<number>) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}) {
  const [displayCurrPage, setDisplayCurrPage] = useState(
    currentPage.toString()
  );

  useEffect(() => {
    setDisplayCurrPage(currentPage.toString());
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setCurrPage(1)} disabled={currentPage === 1}>
        <MdOutlineKeyboardDoubleArrowLeft size={25} />
      </button>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <MdOutlineKeyboardArrowLeft size={25} />
      </button>

      <h1 className="text-center w-20">
        Page{" "}
        <input
          className="w-8 text-center"
          value={displayCurrPage}
          onKeyDown={(e) => {
            const displayCurrPageInt = parseInt(displayCurrPage);

            if (e.key == "Enter") {
              if (
                displayCurrPage == "" ||
                displayCurrPageInt < 1 ||
                displayCurrPageInt > pageLimit
              ) {
                alert("That is not a valid page number.");
              } else {
                setCurrPage(displayCurrPageInt);
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
        <MdOutlineKeyboardArrowRight size={25} />
      </button>
      <button onClick={() => setCurrPage(pageLimit)} disabled={currentPage === pageLimit}>
        <MdOutlineKeyboardDoubleArrowRight size={25} />
      </button>
    </div>
  );
}

export default Paginator;
