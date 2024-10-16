import { useState, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary"

function App() {
  const [counter, setCounter] = useState(0);
  const ref = useRef();

  function startClock() {
     const value = setInterval(function() {
      setCounter(c=>c+1);
      ref.current= value;
     }, 1000)
  }
  function stopClock() {
    clearInterval(ref.current);
  }
  return (
    <div>
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
          <Counter counter={counter}/>
      </ErrorBoundary>
     <button onClick={startClock}>Start Clock</button>
     <button onClick={stopClock}>Stop Clock</button>
    </div>
  )
}

function Counter(props) {
  return <div>
    {props.counter}
  </div>
}
export default App