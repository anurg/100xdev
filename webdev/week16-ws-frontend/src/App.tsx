import { useEffect, useRef, useState } from 'react';

import './App.css'

function App() {
  const [socket,setSocket] = useState();
  const inputRef = useRef();
  const oldTextRef = useRef();
  const [ServerResponse,setServerResponse] = useState("");

  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message)
  }
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (event)=> {
      // alert(event.data);
      const oldText = oldTextRef.current.value;
      setServerResponse(oldText+ '\n'+event.data);
    }
  },[])

  return (
    <div>
      <textarea  placeholder='Message..' ref={inputRef} ></textarea>
      <button onClick={sendMessage} className='button' >Send </button>
      <div>
          <textarea disabled={true} value={ServerResponse} ref={oldTextRef}></textarea>
      </div>
      
    </div>
 
  )
}

export default App
