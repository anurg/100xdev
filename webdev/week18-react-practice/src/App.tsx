import { useState } from "react";
import { PostComponent, Post } from "./components/Post"

function App() {

const newPost:Post = {
  name:"Anurag"
}
  const [posts,setPosts] = useState<Post[]>([])
  const postComponents = posts.map(post=><PostComponent  name={post.name}/>)
 function addPost() {
    setPosts([...posts,newPost])
 }
  return (
   <div>
       <button onClick={addPost}>Add Post</button>
      {postComponents}
   </div>
  )
}



export default App
