// Import required  hooks
import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    fetch('https://dogapi.dog/api/v2/facts')
      .then(res => res.json())
      .then(data => {
        setFact(data.data)
      }) 
      .catch(error => {
        console.error("Error fetching dog facts:", error)
      });
  };

  const handleRefreshClick = () => {
    fetchFact();
  }

  // Hint: Define the API endpoint
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

  return (
    <div className="container">
      <div className="box">
        {fact && <DogFact fact={fact} />}
        <button className="button" onClick={handleRefreshClick}>🐾Get a New Fact🐾</button>
      </div>
    </div>
  );
};
