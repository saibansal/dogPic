import React, { useState, useEffect } from "react"; 

const HuskyDog = () => {
  const [huskyPic, setHuskyPic] = useState("");
  
  const getHuskyImage = async () => {
    const huskyListUrl = "https://dog.ceo/api/breed/husky/images/random";
    try {
      const response = await fetch(huskyListUrl);
      const responseJson = await response.json();
      console.log(responseJson, "dsf");
      setHuskyPic(responseJson.message);
    } catch (err) {
      console.error(err);
    }
  }; 

  useEffect (()=> {
    getHuskyImage();
  }, []);

  return (
    <>
      {huskyPic && <img src={huskyPic} alt="Husky" />}
    </>
  );
};

export default HuskyDog;
