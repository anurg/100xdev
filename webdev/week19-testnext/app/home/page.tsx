import axios from "axios"

export default async function Home() {

    function delay(seconds:number):Promise<void> {
        return new Promise(resolve=>setTimeout(resolve,seconds*1000))
    }
    await delay(5)
   const response = await axios.get("http://localhost:3000/api/v1/user/details")
   const data = response.data

    return (
        <div>
            Home Page!
            <div>Name:{data?.name}</div>
            <div>Email:{data?.email}</div>
            <div>City:{data?.address.city}</div>           
        </div>
    )
}