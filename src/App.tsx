import React from 'react';
import './App.css';
import Bio from './Components/Bio';
import ResponsiveAppBar from './Components/Menu';
import Projects from './Components/Projects';
import Pets from './Components/Pets';
import Hobbies from './Components/Hobbies';

function App() {



  return (
    <>
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      <Bio />
      <br />
      <Projects />
      <br />
      <Pets />
      <br />
      <Hobbies />
    </>
  );
}

export default App;

