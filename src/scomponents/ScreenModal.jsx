import React, {useState} from "react";
import ReactDOM from "react-dom";
import ScreenEdit from './ScreenEdit'


function ScreenModal({isShowing, shroom, hide, updateMushroom}) {
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit)
    return edit;
  }

  console.log("edit" + edit)
  console.log("isshowing" + isShowing);

  const {id, finnishname, latinname, grouping, stars, edible, location, foundtime, description, environment } = shroom;

  let modal; 

  if(!edit) {
    modal = (<>
      <div className={isShowing ? "overlay" : "hide"} onClick={hide}/>
      <div className={isShowing ? "modal-wrapper": "hide" } aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className={isShowing ? "modal" : "hide"}>
        <button onClick={hide} >X</button>
        <ScreenEdit shroom={shroom} updateMushroom={updateMushroom}/>
        <button onClick={handleEdit}>Edit</button>
      </div>
      </div>
      </>)
  } else {
    modal =  (<>
      <div className={isShowing ? "overlay" : "hide"} onClick={hide}/>
      <div className={isShowing ? "modal-wrapper": "hide" } aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className={isShowing ? "modal" : "hide"}>
        <button onClick={hide}>X</button>
        <h1>{finnishname}</h1>
        <p>{latinname}</p>
        <p>{foundtime}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
      </div>
      </>)
  }

  return (ReactDOM.createPortal(
    modal,document.getElementById("modal-root")
     )
    )
}

export default ScreenModal;