import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PaginationState {
  currentPage: number;
  reviewsPerPage: number;
  setCurrentPage: (page: number) => void;
  handlePrevPage: () => void;
  handleNextPage: (pageLimit: number) => void;
}

const usePaginationStore = create<PaginationState>()(
  persist(
    (set, get) => ({
      currentPage: 1,
      reviewsPerPage: 10,
      setCurrentPage: (page) => set({ currentPage: page }),
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
