
function App() {
  return (
    <div>
  
      <PostMessage 
      title={"Doggy Post"}
      time={"2m ago"}
      image={"https://images.unsplash.com/photo-1507146426996-ef05306b995a"}
      subtitle={"45666 followers"}
      message={"This is a post about a dog who dared to think differenly."}
      />
      <PostMessage 
      title={"Cat Post"}
      image={"https://storage.needpix.com/rsynced_images/3d-world-globe.jpg"}
      subtitle={"Promoted"}
      message={"This is a post about a Cat who was like dogs."}
      />
      <PostMessage 
      title={"Cat Post"}
      time={"8 hr ago"}
      image={"https://freerangestock.com/sample/127551/kitty-cat-.jpg"}
      subtitle={"986588 followers"}
      message={"This is a post about a Cat who was like dogs."}
      />
    </div>
  )
}
const  style = { backgroundColor: "white",  display:"flex"}

function PostMessage({title,time, image,subtitle, message}) {

  return <div style={{width: 400, border:"1px solid black", borderRadius:10, margin:10, padding:10}}>
          <div style={style}>
    <img src={image} style={
      { height:80,
        width: 80,
        borderRadius:20
      }
    }/>
     <div style={{margin:10}}>
        <b>{title}</b>
        {
          (time!==undefined)?<div>{time}
          <img src="https://cdn4.iconfinder.com/data/icons/openPhone_by_Walrick/PNG/512/Clock.png" style={{height:15, width:15}}/>
        </div> : null
        }
        
        <div>{subtitle}</div>
        
  </div>
  </div>
    <div>
    <p> {message}</p>
  </div>
  </div>
  
}
export default App
