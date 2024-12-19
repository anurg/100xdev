"use client"
export default function Signin() {

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="border p-2">
                <input type="text" placeholder="UserId" />
                <input type="password" placeholder="Password" />
                <button onClick={()=>{

                }} >Signin</button>

            </div>
        </div>
    )
}