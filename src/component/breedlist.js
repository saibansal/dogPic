import React, { useState, useEffect } from "react";

const BreedList = () => {
  const [breedList, setBreedList] = useState([]);

  const getBreedList = async () => {
    const breedListUrl = "https://dog.ceo/api/breeds/list/all";
    try {
      const response = await fetch(breedListUrl);
      const responseJson = await response.json();
      setBreedList(responseJson.message);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBreedList();
  }, []);

  return (
    <>
      {breedList.length > 0 ? (
        breedList.map((breed, index) => (
          <p key={index}>{`Dog ${breed}`}</p> 
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default BreedList;
