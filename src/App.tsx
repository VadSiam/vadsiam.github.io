import React from 'react';
import './App.css';
import Bio from './Components/Bio';
import ResponsiveAppBar from './Components/Menu';
import Experience from './Components/Experience';
import Pets from './Components/Pets';

function App() {



  return (
    <>
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      <Bio />
      <br />
      <Experience />
      <br />
      <Pets />
    </>
  );
}

export default App;

