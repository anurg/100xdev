// import { Counter } from "./components/Counter"
import { useState } from "react"
import { Post,PostInterface } from "./components/Posts"

function App() {
  const post:PostInterface = {
    name:"Anurag",
    subtitle:"Hello React!",
    time:new Date(),
    image:"test",
    description:"Learning React!"
  }
 const [posts,setPosts] = useState([post])


function addPost(post:PostInterface) {
  
  setPosts([...posts,post])
}

  return (
    <div>
     <button onClick={()=>addPost(post)}>Add Post</button>
      <div style={{display:"flex", flexWrap:"wrap"}}>
      {
        posts.map((post,index)=>{
          
            return <Post key={index} name={post.name} subtitle={post.subtitle} time={post.time} image={post.image} description={post.description} />
          
        })
      }
      </div>
     
    </div>
  )
}

export default App
