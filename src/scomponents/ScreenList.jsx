import React from 'react'
import Mushroom from './Mushroom.jsx'

const mushroomList =({mushrooms}) => {

    let mushroomRow = mushrooms.map((shroom) => {
        return (<Mushroom shroom = {shroom} key = {shroom.id}
                />)
    })

    return (
        <div className="container">
            {mushroomRow}
        </div>
    )
}

export default mushroomList;