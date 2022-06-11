import "./styles.css";

function Modal({ children, isOpen, closeModal }) {
  return (
    isOpen && (
      <div className="modal-background">
        <div className="modal-container">
          <button className="modal-close-button" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
