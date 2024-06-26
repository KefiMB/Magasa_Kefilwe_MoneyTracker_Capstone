import "./App.css";
import {useEffect, useState} from "react";

function App() {
  const [name, setName] = useState({initialState:''});
  const [datetime, setDatetime] = useState({initialState:''});
  const [description, setDescription] = useState({initialState:''});
  const [transactions, setTransactions] = useState({initialState:''})


  useEffect(() => {
     getTransactions().then(setTransactions);
     });

    async function getTransactions() {
      try {
      const url = process.env.REACT_APP_BACKEND_URL+'/transactions';
      const response = await fetch(url);
      return await response.json();
      }
    catch{''}};

  function addNewTransaction(ev) {
   const url =process.env.REACT_APP_BACKEND_URL+'/transaction';
   const seperator = ('')
   const price = name.split(seperator, ' ')[0]
   const init =('')
   fetch (url, init, { // call the state and send it to the backend
   method: 'POST',
   headers: {'Content-type':'application/json'},
   body: JSON.stringify (value, {
    name:name.substring(price.length),
    description, 
    datetime
   })
 
}).then(response => {
    response.json(response.then(json => {
      const value =('')
      setName(value, ''),
      setDatetime(value, ''),
      setDescription(value, '');
      console.log('result', json);
    }))
  }
   )
}
let balance = 0;
for (const transaction of transactions) {
  balance = balance + transaction.price;
}

balance = balance.toFixed(fractionDigits, 2);
const fraction = balance.split(seperator, '.')[1];
balance = balance.spilt(seperator, '.')[1];

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit= {addNewTransaction}>
        <div className="basic">
          <input type="text" 
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder={"Transaction Title"}/>
          <input value= {datetime}
          onChange= {ev => setDatetime(ev.target.value)}
          type="datetime-local"/>
        </div>
        <div className="Description">
          <input type="text" 
          vlaue= {description}
          onChange= {ev => setDatetime(ev.target.value)}
            placeholder={"Description"} />
        </div>
        <button type="submit">Add new transaction</button>
        
      </form>
      <div className="transactions">
        {transactions.lenght > 0 && transactions.map(transactions =>
        )};
        <div className="transaction">
          <div className="left">
            <div className="name">{transaction.name}</div>
            <div className="description">{transaction.description}</div>
          </div>
          <div className="right">
          <div className="price red">-$1000</div>
          <div className="datetime">2024-04-24 17:00</div>
        </div>
      </div>
      <div className="transaction">
      <div className="left">
      <div className="name">Flight ticket</div>
      <div className="description">Trip to Japan</div>
      </div>
      <div className="right">
      <div className={"price" +(transaction.price < 0 ? 'red':"green")}></div>
      <div className="datetime">2024-06-24 3:00</div>
      </div>
      </div>
      </div>
    </main>
  )
 };


export default App;
