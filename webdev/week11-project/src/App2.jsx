import { useEffect, useState } from "react";
import { useFetch } from "./useFetch"

function App() {
 
  const [product,setProduct] = useState(1)
  
  const data = useFetch(`https://fakestoreapi.com/products/${product}`,10000);



  return <div>
   <div>Product : {data}</div>
   <button onClick={()=>setProduct(1)}>Product 1</button>
   <button onClick={()=>setProduct(2)}>Product 2</button>
   <button onClick={()=>setProduct(3)}>Product 3</button>
  </div>
}

export default App