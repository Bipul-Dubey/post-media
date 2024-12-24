import React, { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div
          className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 transition-all transform"
          style={{
            animation: open
              ? "fadeIn 0.3s ease-in-out"
              : "fadeOut 0.3s ease-in-out",
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
          {/* Modal Content */}
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
