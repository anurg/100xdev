import { useState } from "react";

function App() {
 
  return (
   <div style={{borderBlockColor:"black"}}>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
   </div>
  )
}
const Counter = ()=> {
  const [count,setCount] = useState(0);
  function increment():void {
    setCount(count+1)
  }
  return (
  <div style={{border:"1px solid black"}}>
     <p>{count}</p>
    <button onClick={increment}
    >Pressed {count} times.</button>
  </div>
  )
}

export default App
