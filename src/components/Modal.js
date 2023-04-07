import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

function Modal({ isOpen, onClose, children }) {
  const modalContent = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalContent.current && !modalContent.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalContent, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-80 sm:p-5">
          <article
            ref={modalContent}
            className="relative h-full w-full bg-white shadow-md dark:bg-slate-800 sm:h-fit sm:max-w-screen-lg sm:rounded-lg"
          >
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
