import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function mushroomCard(props) {

    const {finnishname, latinname, id} = props.shroom;

    const showDetail = (id) => {
        props.history.push({
            pathname:'/show/' + id
        })
    }

    return (
    <Card className="card-style">
            <Card.Body>
                <Card.Title>{finnishname}</Card.Title>
                    <Card.Text>
                    {latinname}
                    </Card.Text>
            </Card.Body>
        <Card.Footer>
        <Button type="button" onClick={() => {showDetail(id)}}>Detaljit</Button>
        </Card.Footer>
    </Card>
    )
}