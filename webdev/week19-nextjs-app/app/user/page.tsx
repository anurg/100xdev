import axios from "axios"

export default async function User() {

     const response = await  axios.get("http://localhost:3000/api/v1/user/details ")
    //  await new Promise(r=>{
    //     setTimeout(r,5000)
    // })
     const data = response.data
    return (
        <div>
            User Page
            <div>
                {data?.name}     
            </div>
            <div> 
                {data?.email}
            </div>
        </div>
    )
}



