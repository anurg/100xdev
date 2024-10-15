import {useState} from 'react';
import { PostMessage } from './Post';
import { Card } from './Card';
function App() {
  

  let posts_start = [{
      title:"Doggy Post",
      time:"2m ago",
      image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a",
      subtitle:"45666 followers",
      message:"This is a post about a dog who dared to think differenly."
  },{
      title:"Promoted Post",
      image:"https://storage.needpix.com/rsynced_images/3d-world-globe.jpg",
      subtitle:"Promoted",
      message:"This is a post about a Cat who was like dogs."
  },{
      title:"Cat Post",
      time:"8 hr ago",
      image:"https://freerangestock.com/sample/127551/kitty-cat-.jpg",
      subtitle:"986588 followers",
      message:"This is a post about a Cat who was like dogs."
  }];
  const [posts , setPosts] = useState([...posts_start]);
  const postComponents = posts.map(post=> <Card key={post.title}><PostMessage 
      title={post.title}
      time={post.time}
      image={post.image}
      subtitle={post.subtitle}
      message={post.message}
    /> 
    </Card> 
  )
  function addPost() {
    setPosts([...posts,{
      title:"Doggy Post",
      time:"2m ago",
      image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a",
      subtitle:"45666 followers",
      message:"This is a post about a dog who dared to think differenly."
    }]);
  }
  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      {postComponents} 
    </div>
  )
}





export default App
