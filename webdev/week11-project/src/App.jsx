import { useEffect, useState, useRef } from "react";

function App() {
  function useDebounced(originalFn) {
    const ref = useRef();
    const fn = ()=> {
      clearTimeout(ref.current);
      ref.current = setTimeout(originalFn,200);
    }
    return fn;
  }
    function searchBackEnd() {
      fetch("api.amazon.com/search");
    }
    const debouncedFn = useDebounced(searchBackEnd);
  return <div>
   <input type="text" placeholder="Search" onChange={debouncedFn}></input>
   
  </div>
}

export default App