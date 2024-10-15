
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
          <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Class11Program() {
  return <>
    Neet Program for Class 11.
  </>
}
function Class12Program() {
  return <>
    Neet Program for Class 12.
  </>
}
export default App
