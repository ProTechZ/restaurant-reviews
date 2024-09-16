import { create } from "zustand";

interface FeedbackState {
  showFeedback: boolean;
  toggleFeedback: () => void;
}

const useFeedbackStore = create<FeedbackState>((set) => ({
  showFeedback: false,
  toggleFeedback: () => set((state) => ({ showFeedback: !state.showFeedback })),
}));

export default useFeedbackStore; 