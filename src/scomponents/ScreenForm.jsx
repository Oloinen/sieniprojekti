import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ScreenForm = ({addMushroom}) => {

    const [shroom, setShroom] = useState({finnishname: '', latinname: ''});

    const handleChange = (e) => {
        e.persist();
        setShroom({...shroom, [e.target.name]:e.target.value})
    }

    const saveShroom = (e) => {
        e.preventDefault();
        addMushroom(shroom)
    }

    /*const handleChange = (e) => {
        console.dir(e.target);
        const  value = e.target.value
        setValues({...values,
            [e.target.name]:value
        })
        console.dir(values);
    }
    const handleAdd = (e)=>{
        const {finnishname, latinname} = values;
        console.log(values)
        props.addMushroom(values);
    }*/

    return (
    <Form>
        <Form.Group>
            <Form.Label>Lajinimi</Form.Label>
            <Form.Control 
            type="text" 
            id="finnishname" 
            name="finnishname"
            placeholder="Sienen nimi"
            value={shroom.finnishname}        
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Tieteellinen nimi</Form.Label>
            <Form.Control 
            type="text" 
            id="latinname"
            name="latinname"
            placeholder="Tieteellinen nimi" 
            value={shroom.latinname}
            onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
            <Form.Check type="checkbox" label="Syötävyys" />
        </Form.Group>
        <Button 
        variant="primary" 
        value="Click"
        onClick={saveShroom}>
        Submit
        </Button>
    </Form>
    )
}

export default ScreenForm;