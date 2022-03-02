import React,{useContext} from 'react';
import {GloalContext} from '../Context/GlobelState';

function Balance() {
  const {transaction} = useContext(GloalContext);
  const amounts = transaction.map(transaction => transaction.amount);
   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <> 
        <h4>Your Balance</h4>
        <h1>${total}</h1>
    </>
  )
}

export default Balance