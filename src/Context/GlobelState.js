import React , {createContext , useReducer} from "react";
import AppReducer from './AppReducer'


// inalit state

const initialState = {
    transaction :[]
};



export const GloalContext = createContext(initialState);


//Provider
export const GlobalProvider = ({children})=>{
    const [state , dispatch] = useReducer(AppReducer , initialState);


    //Action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload :id
        })
    }
    //Add Transaction
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload :transaction
        })
    }
    return (
        <GloalContext.Provider value={{
            transaction : state.transaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GloalContext.Provider>
    )
}