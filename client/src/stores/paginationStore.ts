import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PaginationState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  reviewsPerPage: number;
  setReviewsPerPage: (val: number) => void;
  handlePrevPage: () => void;
  handleNextPage: (pageLimit: number) => void;
}

const usePaginationStore = create<PaginationState>()(
  persist(
    (set, get) => ({
      currentPage: 1,
      setCurrentPage: (page) => set({ currentPage: page }),
      
      reviewsPerPage: 15,
      setReviewsPerPage: (val) => set({ reviewsPerPage: val }),

      handlePrevPage: () => {
        const prevPage = get().currentPage;
        set({ currentPage: prevPage > 1 ? prevPage - 1 : 1 });
      },

      handleNextPage: (pageLimit) => {
        const prevPage = get().currentPage;
        set({ currentPage: prevPage !== pageLimit ? prevPage + 1 : pageLimit });
      },
    }),
    { name: "pagination-storage" }
  )
);

export default usePaginationStore;
