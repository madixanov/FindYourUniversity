import React from "react";

const Modal = ({ isOpen, onAgree, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="button-row">
          <button className="modal-close" onClick={onAgree}>Yes</button>
          <button className="modal-close" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;