import React from 'react';
import '../styles/Mushroom.css'
import ScreenModal from './ScreenModal.jsx';
import useModal from '../hooks/useModal.jsx'

const Mushroom = (props) => {

    const {finnishname, latinname} = props.shroom;
    const {isShowing, toggle} = useModal();

    return (
    <div className="card" onClick={toggle}>
            <div className="cardText">
                <div>{finnishname}</div>
                    <div>
                    {latinname}
                    </div>
            </div>
        <div>
        <button className="button-default">Show Modal</button>
        <ScreenModal
        isShowing={isShowing}
        hide={toggle}/>
        </div>
        
    </div>
    )
}

export default Mushroom;