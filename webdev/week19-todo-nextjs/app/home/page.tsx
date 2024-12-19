import axios from "axios"
// import { PrismaClient } from "@prisma/client";

async function getUserDetails() {
    try {
        const response = await axios.get("http://localhost:3000/api/v1/signup")
        return response.data
    } catch (error) {
        console.log(error)
    }
}
// const client = new PrismaClient();
// async function getUserDetails() {
//     try {
//        const users = await client.user.findMany({}) 
//        console.log(users)
//        return users;
//     } catch (error) {
//         console.log(error)
//     }
// }
export default async function Home() {
const userDetails = await getUserDetails();
// const users = await getUserDetails();
const users = userDetails.users
    // console.log(users)
    return (
        <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                {
                    users.map((user,index)=>(
                        <div key={index}> 
                            
                            <div>
                                Name: {user?.username}
                            </div>
                            <div>
                                password:{user?.password}
                            </div>
                            
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
    )
}