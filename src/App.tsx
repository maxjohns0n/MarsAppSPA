import React, { useState, useEffect, useContext, createContext } from 'react';
import './App.css';

const ButtonCountContext = createContext(0);

function InfoComponent({ title, paragraph1, paragraph2, image_src, image_alt }: { title: string, paragraph1: string, paragraph2: string, image_src: string, image_alt: string }) {
  const buttonCount = useContext(ButtonCountContext);
  return (
    <div className='App-intro'>
      <h1>{title}</h1>
      <h2>{buttonCount}</h2>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <img src={image_src} style={{ width: "50%" }} alt={image_alt} />
    </div>
  );
}

function NasaInfo() {
  const title = "The National Aeronautics and Space Administration";
  const p1 = "NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.";
  const p2 = `At its 20 centers and facilities across the country – and the only National Laboratory in space – NASA studies Earth,
  including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, 
  including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.`;
  const img = "https://www.nasa.gov/wp-content/uploads/2023/07/iss069e018537-1.jpg";
  const img_alt = "Astronaut outside space station with the Earth in the background."
  return (
    <div>
      Component 3
      <InfoComponent title={title} paragraph1={p1} paragraph2={p2} image_src={img} image_alt={img_alt} />
    </div>
  );
}

function CountingButton({ onClickHandler }: { onClickHandler: any }) {
  const buttonCount = useContext(ButtonCountContext);
  return (
    <button onClick={onClickHandler}>Clicked {buttonCount} times</button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("buttonClickCount", newCount.toString());
  }

  useEffect(() => {
    const storedCount = localStorage.getItem("buttonClickCount");
    console.log("initialising button count");
    setCount(Number(storedCount) || 0);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ButtonCountContext.Provider value={count}>
          <CountingButton onClickHandler={handleButtonClick} />
          <NasaInfo />
        </ButtonCountContext.Provider>
      </header>
    </div>
  );
}

export default App;
