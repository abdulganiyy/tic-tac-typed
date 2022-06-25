import React from "react";

import reducer,{ initialState,StateType,GameAction} from "../reducers/game";

type GameContextType = {
    game:StateType,
    dispatchGameAction: React.Dispatch<GameAction>
}

type GameContextProviderProps = {
    children:React.ReactNode
}

export const GameContext = React.createContext<GameContextType | null >(null);

export const GameContextProvider = ({children}:GameContextProviderProps) => {
    const [game,dispatchGameAction] = React.useReducer(reducer,initialState);

    return (
        <GameContext.Provider value={{game,dispatchGameAction}}>
        {children}
        </GameContext.Provider>)
}

