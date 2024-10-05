const Modal = ({ content, onClose, handleClickOutside }) => {
  return (
    <section
      id="modal-overlay"
      className="!m-0 fixed z-50 inset-0 bg-black bg-opacity-20 flex justify-center items-center"
      onClick={handleClickOutside} 
    >
      <article className="bg-white p-10 rounded-lg w-[30rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl mb-4 font-bold">Modal</h2>
       
          <button
            className="bg-white shadow rounded-full w-8 h-8 text-red-500"
            onClick={onClose}
          >
            x
          </button>
        </div>
        {content}
      </article>
    </section>
  );
};

export default Modal;
