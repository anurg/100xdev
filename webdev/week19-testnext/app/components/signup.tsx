"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEventHandler,useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    return (
        <div>
            <LabelledInput onChange={(e)=>{setUsername(e.target.value)}} label="Username" placeholder="Username"/>
            <LabelledInput onChange={(e)=>{setPassword(e.target.value)}} label="Password" placeholder="Password" type={"password"}/>
            <button onClick={async ()=>{
                const response = axios.post("http://localhost:3000/api/v1/user/details/",{
                    username,
                    password
                });
                router.push("/")
            }} type="button">Sign Up</button>
        </div>
    )
}


function LabelledInput({label,placeholder,type,onChange}:LabelledInputType) {
    return <div>
        <label className="">{label}</label>
        <input onChange={onChange} type={type||"text"} placeholder={placeholder}  />
    </div>
}
interface LabelledInputType {
    label:string;
    placeholder:string;
    type?:string;
    onChange:ChangeEventHandler<HTMLElement>;
}