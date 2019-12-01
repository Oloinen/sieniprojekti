import React from 'react';
import '../styles/Mushroom.css'
import ScreenModal from './ScreenModal.jsx';
import useModal from '../hooks/useModal.jsx'

const Mushroom = ({shroom, updateMushroom}) => {

    const {finnishname, latinname, id} = shroom;
    const {isShowing, toggle} = useModal();

    return (
    <div className="card">
            <div className="cardText">
                <div>{finnishname}</div>
                    <div>
                    {latinname} ja {id}
                    </div>
            </div>
        <div>
        <button onClick={toggle} className="button-default">Show Modal</button>
        <ScreenModal
        isShowing={isShowing}
        hide={toggle}
        shroom={shroom}
        updateMushroom={updateMushroom}/>
        </div>
        
    </div>
    )
}

export default Mushroom;