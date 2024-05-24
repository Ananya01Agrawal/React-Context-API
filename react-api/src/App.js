import { useContext } from "react";
import './App.css';
import counter from "./components/counter"
import { CounterContext }  from "./context/Counter";

function App() {
  const counterState = useContext(CounterContext);
  return (
    <div className="App">
      <h1>Count is 0</h1>
      <counter />
      <counter />
      <counter />
      <counter />
    </div>
  );
}

export default App;
