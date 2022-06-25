import React from 'react'
import './Square.css'
import { GameContext } from "../../contexts/game";
import winnerCalculator from '../../utils/winnerCalculator'

type SquareComponentProps = {
    index:number
}

const Square = ({index}:SquareComponentProps) => {
  const gameContext = React.useContext(GameContext);
  const squares = gameContext?.game?.squares
  const playHandler = () =>{
      if(winnerCalculator(squares) || gameContext?.game.squares[index]){
         return
      }
     
      gameContext?.dispatchGameAction({
          type:'PLAY',
          index
      })
      
  }
  return (
    <button onClick={playHandler} className={`square square--${gameContext?.game.squares[index]}`}>{gameContext?.game.squares[index]}</button>
  )
}

export default Square