import { create } from "zustand";

interface ModalState {
  showModal: boolean;
  toggleModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  toggleModal: () => set((state) => ({ showModal: !state.showModal })),
}));

export default useModalStore; 