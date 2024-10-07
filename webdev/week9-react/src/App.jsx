import { useEffect, useState } from "react"


function App() {
  const [visible,setVisible] = useState(true);

    useEffect(function() {
        const flag = setInterval(function() {
          setVisible(c => !c);
        },5000);
        return function() {
          clearInterval(flag)
        }
    },[]);
    
  
  return (
    <div>
      {visible? <Counter /> : null }
    </div>

  )
}
function Counter() {
  console.log("Counter called!");
  const [count, setCount] = useState(0);
  
  useEffect(function() {
    console.log("mounted");
    const clock = setInterval(function() {
      console.log("from inside the Interval")
      setCount(count=>count+1)
    },1000);
    return function() {
      console.log("on Unmount")
      clearInterval(clock);
    }
  },[])
  
  function IncreaseCount() {
    setCount(count=>count+1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={IncreaseCount}>Increase Count </button>

  </div>
}
export default App
