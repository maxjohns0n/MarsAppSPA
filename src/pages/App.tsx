import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import RoverPhotos from './RoverPhotos';
import { getRoverNames } from '../MarsAPI';

function PageLayout() {
  return (
    <>
      <Navbar />
      <Container className='py-4'>
        <Outlet />
      </Container>
    </>
  );
}

function Home() {
  return (
    <p>home</p>
  )
}

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "rover-photos",
        element: <RoverPhotos />,
        loader: getRoverNames
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
