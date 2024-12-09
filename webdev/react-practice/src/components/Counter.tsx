import axios from "axios";
import { useEffect, useState } from "react"

export function Counter() {
    const [count,setCount] = useState(0)
    const [products,setProducts] =useState([])
    let x:number = 0;
    function addCount() {
        setCount(count + 1)
    }
    const getData = async function() {
        const res = await axios.get("https://fakestoreapi.com/products")
        
        setProducts(res.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return <div>
        <div>
            {x}
        </div>
        <button onClick={addCount}>Add Count</button>
        <div>
            Counter: {count}
        </div>
        <p>Products List
            {products.map(product=><li key={product.id}> {product.title}-{product.price} </li>)}
            
        </p>
      
    </div>
}