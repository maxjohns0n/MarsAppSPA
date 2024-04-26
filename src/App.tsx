import React from 'react';
import logo from './logo.svg';
import './App.css';

function InfoComponent({ title, paragraph1, paragraph2, image_src } : {title: string, paragraph1: string, paragraph2: string, image_src: string}) {
  return (
    <div className='App-intro'>
      <h1>{title}</h1>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <img src={image_src} style={{ width: "50%" }} />
    </div>
  );
}

function NasaInfo() {
  const title = "The National Aeronautics and Space Administration";
  const p1 = "NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.";
  const p2 = "At its 20 centers and facilities across the country – and the only National Laboratory in space – NASA studies Earth, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.";
  const img = "https://www.nasa.gov/wp-content/uploads/2023/07/iss069e018537-1.jpg";
  return (
    <InfoComponent title={title} paragraph1={p1} paragraph2={p2} image_src={img}/>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NasaInfo />
      </header>
    </div>
  );
}

export default App;