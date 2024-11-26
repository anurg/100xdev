
import { useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
 const [messages, setMessages] = useState(["Welcome to chat!","Hello"]);
 const wsRef = useRef();
useEffect(()=>{
  const ws = new WebSocket("ws://localhost:8080")
  wsRef.current = ws;
  ws.onmessage = (event)=> {
    setMessages((m)=> [...m, event.data] )
  }
  ws.onopen = ()=>{
    ws.send(JSON.stringify({
      type:"join",
      payload:{
        roomId:"red"
      }
    }))
  }
 return ()=> {
  ws.close();
 }
},[]);

  return (
    <div className="h-screen bg-black text-white flex flex-col justify-between">
      <div className='bg-white'>
        {messages.map(message=>{return <div className='bg-white text-black rounded p-1 m-1'>{message}</div>})}
      </div>
      <div className='flex flex-row'>
        <input className='text w-full h-10 text-black' id='message'/>
        <button className='bg-purple-600 text-white' onClick={()=>{
            const message = document.getElementById('message')?.value;
            wsRef.current.send(JSON.stringify({
              type:"chat",
              payload:{
                message:message
              }
            }))
        }}>Send Message</button>
      </div>
      
    </div>
  )
}

export default App
