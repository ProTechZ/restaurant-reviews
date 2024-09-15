import { create } from "zustand";

type PaginationStore = {
  currentPage: number;
  reviewsPerPage: number;
  setCurrentPage: (page: number) => void;
};

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 1,
  reviewsPerPage: 10,
  setCurrentPage: (page: number) => set(() => ({ currentPage: page })),
}));

export default usePaginationStore;
