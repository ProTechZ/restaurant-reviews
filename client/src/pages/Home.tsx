import { useState, useEffect } from "react";
import { Review } from "..";

import { getReviewsList } from "../services/reviewsListApi";
import useModalStore from "../stores/modalStore";

import AddReviewBtn from "../components/AddReviewBtn";
import ReviewsList from "../components/ReviewsList";
import Navbar from "../components/Navbar";
import AddReviewModal from "../components/AddReviewModal";

function Home() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const {showModal, toggleModal} = useModalStore()

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getReviewsList();
      setReviewsList(response);
    }

    fetchMyAPI();
  }, [showModal]);

  return (
    <div className="bg-gray-100 h-screen overflow-hidden">
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleModal}
          />

          <div className="relative z-60 w-full flex justify-center bottom-10">
            <AddReviewModal />
          </div>
        </div>
      ) : null}

      <div className="z-10">
        <div className="mb-2">
          <Navbar />
        </div>
        <h1 className="text-3xl text-center tracking-widest">REVIEWS</h1>

        <div className="py-10 flex justify-center">
          <AddReviewBtn  />
        </div>

        <div className="px-2 h-full">
          <ReviewsList reviewsList={reviewsList} />
        </div>
      </div>
    </div>
  );
}

export default Home;
