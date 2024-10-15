import { Children } from "react";


export function Card({children}) {
    return <div style={{border:"1px solid black", borderRadius:"10px", backgroundColor:"pink", margin:"10px", padding:"10px", width:"400px"}}>
        {children }
        <h1>Total Rows: {Children.count(children)}</h1>
    </div>
}