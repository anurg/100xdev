import { useState, useContext, createContext } from "react";
import { useBulbContext, BulbContextProvider } from "./BulbContext";

function App() {
return <div>
      <BulbContextProvider>
            <Light/>
      </BulbContextProvider>
    </div>
}

function Light() {
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}
function LightBulb() {
  const {bulbOn} = useBulbContext();
  return <div>
    {bulbOn? "Bulb On": "Bulb Off"}
  </div>
}
function LightSwitch() {
  const { bulbOn, setBulbOn } = useBulbContext();
  function Toggle() {
    setBulbOn(bulbOn=>!bulbOn)
  }
  return <div>
    <button onClick={Toggle}>Toggle bulb</button>
  </div>
}
// function BulbContextProvider({children}) {
//   const [bulbOn, setBulbOn] = useState(true);
//   return <div>
//     <BulbContext.Provider value={{
//       bulbOn: bulbOn,
//       setBulbOn: setBulbOn
//     }}>
//       {children}
//   </BulbContext.Provider>
//   </div>
// }
export default App