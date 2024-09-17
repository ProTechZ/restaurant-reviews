import useFeedbackStore from "../stores/feedbackStore";
import AddReviewModalSection from "./AddReviewModalSection";
import FeedbackModalSection from "./FeedbackModalSection";

function Modal() {
  const { showFeedback } = useFeedbackStore();

  return (
    <div className="bg-white rounded-lg px-6 py-4 w-[25rem] h-[26rem] ">
      {showFeedback ? <FeedbackModalSection /> : <AddReviewModalSection />}
    </div>
  );
}

export default Modal;
