import { useEffect, useState } from "react";
import { usePrev } from "./usePrev";

function App() {
    const [count,setCount] = useState(0);
    const prev = usePrev(count);
  return <div>
   <div>{count } </div>
   <button onClick={()=>setCount(c=>c+1)}>Increase</button>
    <h3>The Previous value is {prev}</h3>
  </div>
}

export default App