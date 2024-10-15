
import './App.css'
import {BrowserRouter, Routes, Route, Link, useNavigate, redirect, Outlet} from "react-router-dom"

function App() {


  return (
    <div>
      {/* <a href='/'>Home</a>
      <a href='/neet/online-coaching-class-11'>Class11</a>
      <a href='/neet/online-coaching-class-12'>Class12</a> */}
      <BrowserRouter> 
     
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
              <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Layout() {
  return <div>
      <Link to="/">Home </Link>
      <Link to="/neet/online-coaching-class-11">Class11 </Link>
      <Link to="/neet/online-coaching-class-12">Class12 </Link>
    <Outlet />
    Footer | Contact Us
  </div>
}
function Class11Program() {
  return <div>
    Neet Program for Class 11.
  </div>
}
function Class12Program() {
  const navigate = useNavigate();
  function redirectTo() {
    navigate("/neet/online-coaching-class-11");
  }
  return <div>
    Neet Program for Class 12.
    <button onClick={redirectTo}>Go to Home</button>
  </div>
}
function Home() {
  return <div>
    Home Page.
  </div>
}
function ErrorPage() {
  return <div>
    Error Page.
  </div>
}
export default App
