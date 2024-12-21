"use client"

import { useEffect,useState } from "react"
import axios from "axios"

export default function ReactPage() {
    const [data, setData] = useState({})

    
    useEffect( ()=>{
        async function getData() {
            const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
            // console.log(response.data)
            setData(response.data)
        }
         getData();
        
    },[])
    return (
        <div>
            React Data Fetching Example.
            <div>Name:{data?.name}</div>
            <div>Email:{data?.email}</div>
            <div>City:{data?.address.city}</div>  
        </div>
    )
}