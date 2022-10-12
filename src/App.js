import React from 'react';
import './App.css';
import Scoreboard from './Components/Scoreboard';
import ScoreContextProvider from './Contexts/ScoreContextProvider';




function App() {

  return (
    
      <ScoreContextProvider>
          <Scoreboard/>
         
      </ScoreContextProvider>
    
  );
}

export default App;
