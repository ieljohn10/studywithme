import './Modal.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {/* Modal Header */}
        <div className="winning-list-modal-header">
          <h1>Title Here</h1>
          <button type="button" className="modal-close-button" onClick={handleClose}>X</button>
        </div>
        
        {children}
        
      </section>
    </div>
  );
};

export default Modal;