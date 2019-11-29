import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ScreenModal from './ScreenModal.jsx';
import useModal from '../hooks/useModal.jsx'

const Mushroom = (props) => {

    const {finnishname, latinname} = props.shroom;
    const {isShowing, toggle} = useModal();

    return (
    <Card className="card-style">
            <Card.Body>
                <Card.Title>{finnishname}</Card.Title>
                    <Card.Text>
                    {latinname}
                    </Card.Text>
            </Card.Body>
        <Card.Footer>
        <button className="button-default" onClick={toggle}>Show Modal</button>
        <ScreenModal
        isShowing={isShowing}
        hide={toggle}/>
        </Card.Footer>
        
    </Card>
    )
}

export default Mushroom;