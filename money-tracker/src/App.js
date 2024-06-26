import "./App.css";
import {useState} from "react";
function App() {
  const [name, setName] = useState({initialState:''});
  const [datetime, setDatetime] = useState({initialState:''});
  const [description, setDescription] = useState({initialState:''});
  
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
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
            placeholder={"description"} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New iPad</div>
            <div className="description">Apple Store</div>
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
      <div className="price red">-$1600</div>
      <div className="datetime">2024-06-24 3:00</div>
      </div>
      </div>
      </div>
    </main>
  );
}

export default App;
