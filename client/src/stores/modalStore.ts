import { create } from "zustand";

interface ModalState {
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  openModal: () => set(() => ({ showModal: true })),
  closeModal: () => set(() => ({ showModal: false })),
}));

export default useModalStore;
