"use client"
import { ChangeEventHandler,useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <LabelledInput onChange={(e)=>{setUsername(e.target.value)}} label="Username" placeholder="Username"/>
            <LabelledInput onChange={(e)=>{setPassword(e.target.value)}} label="Password" placeholder="Password" type={"password"}/>
        
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