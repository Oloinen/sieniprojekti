import React, { useState, useEffect } from 'react';
import ScreenList from './ScreenList.jsx'
import {fetchMainData, createMushroom} from '../service/FetchClient'
import ScreenForm from './ScreenForm'

const ScreenMain = (props) => {
    const [mushrooms, setMushrooms] = useState([]);

    const getMushrooms = () => {
        fetchMainData().then(res => setMushrooms(res))
    }

    const addMushroom = (data) => {
        createMushroom(data)
        .then(res => {
            getMushrooms();
        })
    }

    useEffect(() => {
    getMushrooms()
    }, [])

    return (
        <div>
            <ScreenList mushrooms={mushrooms}/>
            <ScreenForm addMushroom = {addMushroom}/>
        </div>
    )

}

export default ScreenMain;