import React from 'react';


export type StateType =  {
    squares:(undefined | null | 'O' | 'X')[];
    xIsNext:boolean;
    start:boolean;
} 

export type PlayAction = {
    type:'PLAY',
    index:number
}

export type StartAction = {
    type:'START'
}

export type ChooseAction = {
    type:'CHOOSE'
}

export type RestartAction = {
    type:'RESTART'
}

export type RefreshAction = {
    type:'REFRESH'
}

export type GameAction = StartAction | PlayAction | ChooseAction | RestartAction | RefreshAction;


export const initialState:StateType = {
    squares:Array(9).fill(null),
    xIsNext:true,
    start:false
}

export default function reducer(state:StateType,action:GameAction){

    switch(action.type){
        case 'PLAY' : {
            const squareIndex = action.index;
           const squares = state.squares.slice()
           squares[squareIndex] = state.xIsNext?'X':'O'

           return {
               ...state,
               squares,
               xIsNext:!state.xIsNext
           }
        };

        case 'CHOOSE' : {
            return {
               ...state,
               xIsNext:!state.xIsNext
            }
        };

        case 'START' : {
            return {
               ...state,
               start:true
            }
        };

        case 'RESTART' : {
            return initialState
        };

        case 'REFRESH' : {
             return {squares:Array(9).fill(null),
             xIsNext:true,
             start:true
            }
        };

        default:{
            return state;
        }
    }

}

