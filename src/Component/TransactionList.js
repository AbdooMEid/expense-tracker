import React , {useContext} from 'react';
import {GloalContext} from '../Context/GlobelState';
import Transactions from './Transactions'

function TransactionList() {
  const {transaction} = useContext(GloalContext);
  return (
    <>
         <h3>History</h3>
        <ul id="list" className="list" >
          {transaction.map(transaction => (<Transactions key={transaction.id} transaction={transaction}/>))}
            
        </ul>
    </>
  )
}

export default TransactionList