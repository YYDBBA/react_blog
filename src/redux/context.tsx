import React, { createContext, useReducer, Dispatch } from 'react';
import { reducer, Action, State } from './reducer'

export type Ctx = { state: State; dispatch: Dispatch<Action> }
export const StoreContext = createContext<Ctx | null>(null)
export const Store: React.FC = props => {
  const [state, dispatch] = useReducer(reducer, { bgColor: 'white', color: '#fff' })
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  )
}