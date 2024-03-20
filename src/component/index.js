import React, { useState, useEffect } from "react";
import axios from 'axios';


const Man = () => {
  const [dogPic, setDogPic] = useState([]);
  
  const getDogList = async () => {
    const listUrl = "https://dog.ceo/api/breed/hound/images";
    try {
      const response = await fetch(listUrl);
      const responseJson = await response.json();
      console.log(responseJson, "dsf");
      setDogPic(responseJson.message);
    } catch (err) {
      console.error(err);
    }
  }; 
  useEffect (()=> {
    getDogList();
   }, []);


  return (
    <>
      {dogPic.map((pic, index) => (
        <img key={index} src={pic} alt={`Dog ${index}`} />
      ))}
 
    </>
  );
};

export default Man;
