import { useState, useEffect } from "react";
import { Review } from "..";

import { getReviewsList } from "../services/reviewsListApi";

import AddReviewBtn from "../components/AddReviewBtn";
import ReviewsList from "../components/ReviewsList";
import Navbar from "../components/Navbar";
import AddReviewModal from "../components/AddReviewModal";

function Home() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal ? false : true);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await getReviewsList();
      setReviewsList(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      {showModal ? (
        <div className="z-200">
          <AddReviewModal />
        </div>
      ) : null}

      <div className="z-100">
        <div className="mb-2">
          <Navbar />
        </div>
        <h1 className="text-3xl text-center tracking-widest">REVIEWS</h1>

        <div className="py-10 flex justify-center">
          <AddReviewBtn toggleModal={toggleModal} />
        </div>

        <div className="px-2 h-full">
          <ReviewsList reviewsList={reviewsList} />
        </div>
      </div>
    </div>
  );
}

export default Home;
