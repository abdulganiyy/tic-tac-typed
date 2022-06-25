import React from 'react'
import './Modal.css';
import { GameContext } from '../../contexts/game'
import winnerCalculator from '../../utils/winnerCalculator'


type ModalPropsTypes = {
    children:React.ReactNode;
}
const Modal = () => {
    const gameContext = React.useContext(GameContext)
    const squares = gameContext?.game?.squares
    const show = winnerCalculator(squares)?true:false;

    const quitHandler = () => {
        gameContext?.dispatchGameAction({
            type:'RESTART'
        })
    }

    const goToNewRoundHandler = () => {
        gameContext?.dispatchGameAction({
            type:'REFRESH'
        })
    }
  return (
    <div className={`modal modal--${show?'show':''}`}>
        <div className='modal-content-wrapper'>
        <div>{winnerCalculator(squares)==='X'?<span className='cancel'>&#215; TAKES THE ROUND</span>:<span className='circle'>&#8728; TAKES THE ROUND</span>} </div>
        <div className='modal-action-btns'><button onClick={quitHandler} className='modal-btn modal-btn--silver'>QUIT</button><button onClick={ goToNewRoundHandler} className='modal-btn modal-btn--yellow'>NEXT ROUND</button></div>
        </div>
        
    </div>
  )
}

export default Modal