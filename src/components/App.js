import React, {useState, useEffect} from "react";
import DogBar from "./DogBar";
import DogDetails from "./DogDetails";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDogiD] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(res => res.json())
      .then(data => setDogs(data))
  }, [])

    

  return (
    <div className="App">
      <Filter />
      <DogBar dogs={dogs} setSelectedDogiD={setSelectedDogiD} />
      <DogDetails dog={selectedDog} />
    </div>
  );
}

export default App;
