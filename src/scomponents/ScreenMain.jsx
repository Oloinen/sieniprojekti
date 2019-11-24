import React, { useState, useEffect } from 'react';
import ScreenList from './ScreenList.jsx'
import {fetchMainData} from '../service/FetchClient'

const ScreenMain = (props) => {
    const [mushrooms, setMushrooms] = useState([]);

    const getMushrooms = () => {
        fetchMainData().then(res => setMushrooms(res))
    }

    useEffect(() => {
    getMushrooms()
    }, [])

    return (
        <div>
            <ScreenList mushrooms={mushrooms}/>
        </div>
    )

}

export default ScreenMain;