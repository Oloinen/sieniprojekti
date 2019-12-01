import React, { useState, useEffect } from "react";
import { fetchMainData, createMushroom, putMushroom } from "../service/FetchClient";
import ScreenForm from "./ScreenForm";
import Mushroom from './Mushroom'
import '../styles/ScreenMain.css'

const ScreenMain = () => {
  const [mushrooms, setMushrooms] = useState([]);

  const getMushrooms = () => {
    fetchMainData().then(res => setMushrooms(res));
  };

  const addMushroom = data => {
    createMushroom(data).then(res => {
      getMushrooms();
    });
  };

  const updateMushroom = (id, data) => {
    putMushroom(id, data).then(res => {
      getMushrooms()
      console.log("Putin id on " + id)
    })
  }

  useEffect(() => {
    getMushrooms();
  }, []);

  let mushroomRow = mushrooms.map((shroom) => {
    return (<Mushroom shroom = {shroom} key = {shroom.id}
              updateMushroom={updateMushroom}
            />)
})

  return (
    <div className="row">
      <div className="container" id="contact">
        <ScreenForm addMushroom={addMushroom} />
      </div>
      <div className="cardContainer">
      {mushroomRow}
      </div>
    </div>
  );
};

export default ScreenMain;
