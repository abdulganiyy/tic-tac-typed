import React from 'react'
import { GameContext } from '../../contexts/game'
import Square from '../Square/Square'
import './Board.css'
import Modal from '../Modal/Modal'

const Board = () => {
    const gameContext = React.useContext(GameContext)
    const xIsNext = gameContext?.game.xIsNext;

    const restartHandler = () => {
        gameContext?.dispatchGameAction({
            type:'RESTART'
        })
    }
  return (
    <div className='board-wrapper'>
        <Modal/>
     <div className='board-header'>
         <p><span className='cancel'>&#215;</span><span className='circle'>&#8728;</span></p>
         <p className='turn'>{xIsNext?<span>&#215;</span>:<span>&#8728;</span>} TURN</p>
         <p><button onClick={restartHandler} className='restart'>&#8635;</button></p>
    </div>   
    <div className='board'>{gameContext?.game.squares.map((_,index) => <Square key={index} index={index} />)}</div>
    </div>  
    
  )
}

export default Board