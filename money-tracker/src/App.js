import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={"+200 new sanmsung tv"} />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder={"description"} />
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
