
function App() {
  return (
    <div>
  
      <PostMessage />
      <PostMessage />
      <PostMessage />
      <PostMessage />
    </div>
  )
}
const  style = { backgroundColor: "white",  display:"flex"}
function PostMessage() {

  return <div style={{width: 400, border:"1px solid black", borderRadius:10, margin:10, padding:10}}>
          <div style={style}>
    <img src={"https://images.unsplash.com/photo-1507146426996-ef05306b995a"} style={
      { height:40,
        width: 40,
        borderRadius:20
      }
    }/>
     <div style={{margin:10}}>
        <b>Doggy Post</b>
        <div>23888 followers</div>

  </div>
  </div>
    <div>
    <p> This is a post about a dog who dared to think differenly.</p>
  </div>
  </div>
  
}
export default App
