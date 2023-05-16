import React from 'react';
import './App.css';
import Bio from './Components/Bio';
import ResponsiveAppBar from './Components/Menu';
import Experience from './Components/Experience';

function App() {



  return (
    <>
      <ResponsiveAppBar />
      <br />
      <Bio />
      <br />
      <Experience />
    </>
  );
}

export default App;

