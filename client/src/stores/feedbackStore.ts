import { create } from "zustand";

interface FeedbackState {
  showFeedback: boolean;
  goToFeedback: () => void;
  closeFeedback: ()=> void
}

const useFeedbackStore = create<FeedbackState>((set) => ({
  showFeedback: false,
  goToFeedback: () => set(() => ({ showFeedback: true })),
  closeFeedback: () => set(() => ({ showFeedback: false })),
}));

export default useFeedbackStore; 