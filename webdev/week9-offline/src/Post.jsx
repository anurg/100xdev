const  style = { backgroundColor: "white",  display:"flex"}
export function PostMessage({title,time, image,subtitle, message}) {

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