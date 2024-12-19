import Link from "next/link"


export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-lg border" >
      <div className="border text-lg font-bold">ToDo App</div>
      <Link href="/signup">SignUp</Link>
      <Link href="/signin">SignIn</Link>
    </div>
  );
}