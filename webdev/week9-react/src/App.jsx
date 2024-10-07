import { useEffect, useState } from "react"


function App() {
  const [visible,setVisible] = useState(true);
  const [count, setCount] = useState(0);

  function IncreaseCount() {
    setCount(count=>count+1);
  }
    useEffect(function() {
        const flag = setInterval(function() {
          setVisible(c => !c);
        },5000);
        return function() {
          clearInterval(flag)
        }
    },[]);
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
  
  return (
    <div>
      {visible? <Counter count={count}/> : null }
    </div>

  )
}
function Counter(props) {
  console.log("Counter called!");
useEffect(function() {
  console.log("Count Changed!");
  return function() {
    console.log("Count Change Cleanup!")
  }
}, [props.count])
  return <div>
    <h1>{props.count}</h1>

  </div>
}
export default App
