import Header from './Component/Header';
import Balance from './Component/Balance';
import IncomeExpenses from './Component/IncomeExpenses';
import TransactionList from './Component/TransactionList';
import AddTransaction from './Component/AddTransaction';
import {GlobalProvider} from './Context/GlobelState'
import './App.css';



function App() {
  return (
    <GlobalProvider className="App">
      <Header/>
      <div className="container"> 
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
