import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {id: 1, text: "Milk", amount: -20},
        {id: 2, text: "WSB Calls", amount: 12000},
        {id: 3, text: "Stupid Merch", amount: -80},
        {id: 4, text: "OF Payments", amount: -50},
        {id: 5, text: "Star Wars Poster", amount: -20}
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }



    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {/* Whatever is being wrapped (your components) */}
        {children}
    </GlobalContext.Provider>)
}

