import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PaginationState {
  currentPage: number;
  reviewsPerPage: number;
  setCurrentPage: (page: number) => void;
}

// Create the store with TypeScript types
const usePaginationStore = create<PaginationState>()(
  persist(
    (set) => ({
      currentPage: 1,
      reviewsPerPage: 10,
      setCurrentPage: (page: number) => set({ currentPage: page }),
    }),
    { name: "pagination-storage" }
  )
);

export default usePaginationStore;
