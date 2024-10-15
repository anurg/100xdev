import { useEffect, useRef } from "react";
function App() {

  const inputRef = useRef();
  useEffect(function() {
    inputRef.current.focus();
  },[]);

  function focusInput() {
    inputRef.current.focus();
  }
  return (
    <div>
      Sign Up
      <input ref={inputRef} type="text" />
      <input type="text" />
      <button onClick={focusInput}>Submit</button>
    </div>
  )
}

export default App