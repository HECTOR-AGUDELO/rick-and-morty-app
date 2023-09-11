import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";

function App() {
  const [inputValue, setInputValue] = useState(getRandomNumber(126));

  const url = `https://rickandmortyapi.com/api/location/${inputValue || "cualquierCosa"}`;

  const [location, getLocation, hasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [inputValue]);

  const inputSearch = useRef();

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim());
  };

  return (
    <div>
      <header>
        <img src="/banner.png" alt="" />
      </header>
      <h1 className="title">Rick and Morty app</h1>
      <form onSubmit={handleSubmit}>
        <input  style={{ boxShadow: "1px 1px 10px" }} ref={inputSearch} type="text" />
        <button style={{ backgroundColor: "green", color: "white" }}>Search</button>
      </form>
      {
       hasError 
       ? <h2>❌ Hey! you must provide an id from 1 to 126 😭</h2>
       : (
        <>
          <LocationInfo
            location={location} 
          />
          <div className="resident__container ">
            {location?.residents.map((url) => (
              <ResidentCard 
                key={url} 
                url={url} 
              />
             ))
            }
          </div>
        </>
       )
      }
    </div>
  );
}

export default App;
