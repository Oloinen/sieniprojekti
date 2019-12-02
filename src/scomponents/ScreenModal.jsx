import React from "react";
import ReactDOM from 'react-dom';
import useEdit from '../hooks/useEdit'
import ScreenEdit from './ScreenEdit'

const Modal = ({isShowing, shroom, hide, updateMushroom}) => {

  const {id, finnishname, latinname, grouping, stars, edible, location, foundtime, description, environment } = shroom;

  const {moveEdit, edit} = useEdit();

  let modal;

  if (!edit) {
    modal = <>
        <div className={isShowing ? "overlay" : "hide"} onClick={hide}/>
        <div className={isShowing ? "modal-wrapper": "hide" } aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={isShowing ? "modal" : "hide"}>
          <button onClick={hide}>X</button>
          <h1>{finnishname}</h1>
          <p>{latinname}</p>
          <p>{foundtime}</p>
          <button onClick={moveEdit}>Edit</button>
        </div>
        </div>
        </>
  } else {
    modal = <>
        <div className={isShowing ? "overlay" : "hide"} onClick={hide}/>
        <div className={isShowing ? "modal-wrapper": "hide" } aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={isShowing ? "modal" : "hide"}>
          <button onClick={hide}>X</button>
          <ScreenEdit 
            shroom={shroom}
            updateMushroom={updateMushroom}/>
          <button onClick={moveEdit}>Edit</button>
        </div>
        </div>
        </>
  }

    return modal;
    /*createPortal(modal, document.getElementById('modal-root'))*/
}

const ScreenModal = ({ isShowing, hide, shroom, updateMushroom }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div>
      <Modal 
        isShowing = {isShowing}
        hide = {hide}
        shroom = {shroom}
        updateMushroom={updateMushroom}/>
      </div>
  </React.Fragment>, document.getElementById('modal-root')) : null;

export default ScreenModal;