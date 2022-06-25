import React from 'react';
import './App.css';
import { GameContextProvider } from './contexts/game';
import Game from './components/Game/Game';
function App() {
  return (
    <GameContextProvider>
      <Game />    
    </GameContextProvider>
  );
}

export default App;
