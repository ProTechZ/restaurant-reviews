import useModalStore from "../stores/modalStore";

function AddReviewBtn() {
  const { openModal } = useModalStore();

  return (
    <button
      className="bg-red-400 border border-red-500 hover:bg-red-500 rounded-xl px-3 py-1 outline-none "
      onClick={openModal}
    >
      <h1 className="text-xl text-white font-cursive py-2">
        Leave your review!
      </h1>
    </button>
  );
}

export default AddReviewBtn;
