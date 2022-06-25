import React from 'react'
import Board from "../Board/Board"
import './Game.css';
import { GameContext } from "../../contexts/game";

const Game = () => {
    const gameContext = React.useContext(GameContext)
    const start = gameContext?.game.start;
    const xIsNext = gameContext?.game.xIsNext;
  

    const handlePlayerChoice = () => {
        gameContext?.dispatchGameAction({
            type:'CHOOSE'
        })
    }

    const startGame = () => {
        gameContext?.dispatchGameAction({
            type:'START'
        })
    }

  return (
    <div className="game">{!start ? 
       <div className='start-board'>
        <div><span className='cancel'>&#215;</span><span className='circle'>&#8728;</span></div>
        <div className='player-choice'>
            <p className='player-choice__title'>PICK PLAYER 1'S MARK</p>
            <div className='player-choice__picks'><button onClick={handlePlayerChoice} className={`player-choice__pick ${xIsNext?'player-choice__pick--active':''}`}>&#215;</button><button onClick={handlePlayerChoice} className={`player-choice__pick ${!xIsNext?'player-choice__pick--active':''}`}>&#8728;</button></div>
            <p className='player-choice__footer'>REMEMBER : {xIsNext?'X':'O'} GOES FIRST</p>
        </div>
        <div>
            <button onClick={startGame} className='btn-start'>NEW GAME</button>
        </div>
        </div>:
        <Board />}
    </div>
  )
}

export default Game