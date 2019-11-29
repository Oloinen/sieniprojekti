import React from 'react';
import ReactDOM from 'react-dom';


const ScreenModal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ScreenModal;

/*const ScreenModal=(props) => {
    const {show, closeModal, shroom} = props;

    const modal = (<>
    <div className={show ? "overlay" : "hide"} onClick={closeModal}/>
    <div className={show ? "modal" : "hide"}>
          <button type="button" className="modal-close-button" onClick={closeModal}>
            <span>&times;</span>
          </button>
        <p>
          Hello, I'm a modal!
          {shroom}
        </p>
      </div>
    </>)

    return ReactDOM.createPortal(
        modal, document.getElementById("modal-root")
    )
 }


export default ScreenModal;*/