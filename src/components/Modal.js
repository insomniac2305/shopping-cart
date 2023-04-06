import { FaTimes } from "react-icons/fa";

function Modal({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-80 sm:p-5">
          <article className="relative h-full w-full bg-white shadow-md dark:bg-slate-800 sm:h-fit sm:max-w-screen-lg sm:rounded-lg">
            <button
              onClick={onClose}
              className="absolute right-2 top-1 p-1 text-lg text-slate-500"
            >
              <FaTimes />
            </button>
            {children}
          </article>
        </div>
      )}
    </>
  );
}

export default Modal;
