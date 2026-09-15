import "./Css/Modal.css";
import Button from "./Button";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>

          <button
            className="modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="modal-body">
          {children}
        </div>

        <div className="modal-footer">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button variant="danger">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;