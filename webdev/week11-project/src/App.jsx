import { useState } from "react";

function useCounter() {
  const [count,setCount] = useState(0);
  function setIncreaseCount() {
    setCount(c=>c+1);
  }
  return {
    count : count,
    setIncreaseCount: setIncreaseCount
  }
}


function App() {
    const {count, setIncreaseCount} = useCounter();
  return (
    <div>
     {count}
     <button onClick={setIncreaseCount}>Increase Count</button>
    </div>
  )
}

export default App
