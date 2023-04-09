import { useCallback, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

function Modal({ isOpen, onClose, children }) {
  const modalContent = useRef(null);
  const closeTimer = useRef(null);
  const [willClose, setWillClose] = useState(false);

  const handleClose = useCallback(() => {
    setWillClose(true);
    closeTimer.current = setTimeout(() => {
      onClose();
      setWillClose(false);
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        modalContent.current &&
        !modalContent.current.contains(e.target)
      ) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, modalContent, handleClose]);

  return (
    <div
      className={`
      ${isOpen && !willClose ? "opacity-100" : "opacity-0"} 
      ${isOpen ? "" : "-z-10"} 
      fixed left-0 top-0 flex h-full w-full items-center justify-center sm:bg-black sm:bg-opacity-80 transition-all duration-300 sm:p-5`}
    >
      <article
        ref={modalContent}
        className={`
        ${isOpen && !willClose ? "top-0" : "sm:-top-5"} 
        transition-all relative h-full w-full bg-white shadow-md dark:bg-slate-800 sm:h-fit sm:max-w-screen-lg sm:rounded-lg`}
      >
        <button
          onClick={handleClose}
          className="absolute right-2 top-1 p-1 text-lg text-slate-500"
        >
          <FaTimes />
        </button>
        {children}
      </article>
    </div>
  );
}

export default Modal;
