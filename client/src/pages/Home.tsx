import { useState, useEffect } from "react";
import { Review } from "..";

import { getReviewsList } from "../services/reviewsListApi";
import useModalStore from "../stores/modalStore";

import AddReviewBtn from "../components/AddReviewBtn";
import ReviewsList from "../components/ReviewsList";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Paginator from "../components/Paginator";
import usePaginationStore from "../stores/paginationStore";
import useWindowDimensions from "../hooks/useWindowsDimensions";

function Home() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const { showModal, closeModal } = useModalStore();
  const [pageLimit, setPageLimit] = useState(0);

  const { width } = useWindowDimensions();
  const { setReviewsPerPage, reviewsPerPage } = usePaginationStore();

  useEffect(() => {
    async function fetchMyAPI() {
      // you define the function every time the useffect is called - inefficient - define it outside
      const response = await getReviewsList();
      setReviewsList(response);
    }

    fetchMyAPI();
  }, [showModal]);

  useEffect(() => {
    if (width > 1320) {
      setReviewsPerPage(15);
    } else if (width < 1320 && width > 1020) {
      setReviewsPerPage(10);
    } else if (width < 1020 && width > 770) {
      setReviewsPerPage(9);
    } else if (width < 770 && width > 640) {
      setReviewsPerPage(8);
    } else if (width < 640) {
      setReviewsPerPage(5);
    }
    console.log(width, reviewsPerPage); // use a switch statement
  }, [width]);

  useEffect(() => {
    if (reviewsList.length > 0) {
      setPageLimit(Math.ceil(reviewsList.length / reviewsPerPage));
    }
  }, [reviewsList, reviewsPerPage]);

  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          />

          <div className="relative z-60 bottom-10 ">
            <Modal />
          </div>
        </div>
      ) : null}

      <div className="z-10">
        <div className="mb-2">
          <Navbar />
        </div>
        <h1 className="text-3xl text-center tracking-widest">REVIEWS</h1>

        <div className="py-10 flex justify-center">
          <AddReviewBtn />
        </div>

        {pageLimit > 0 ? (
          <>
            <div className="px-2 h-full">
              <ReviewsList pageLimit={pageLimit} reviewsList={reviewsList} />
            </div>

            <div className="absolute bottom-4 left-0 w-full justify-center">
              <Paginator pageLimit={pageLimit} />
            </div>
          </>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Home;
