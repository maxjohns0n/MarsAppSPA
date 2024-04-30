import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <p>home</p>
  )
}

function RoverPhotos() {
  return (
    <p>photos</p>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="rover-photos" element={<RoverPhotos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
