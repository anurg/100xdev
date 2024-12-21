"use client"
export default function Signin() {

    return (
        <div className="flex flex-col items-center h-screen w-screen border-black-1">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={()=>{
                console.log("SignIn")
            }}>SignIn</button>
        </div>
    )
}