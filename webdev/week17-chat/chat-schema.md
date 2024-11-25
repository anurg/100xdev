### Schema for chat app

### User joins the chat Room
```
{
    type: "join",
    payload: {
        roomId:"123"
    }
}
```
### User sends the message in joined chat Room
```
{
    type: "chat",
    payload: {
        message:"Hi There!"
    }
}
```
### Server broadcasts the message to all Users in Room
```
{
    type: "chat",
    payload: {
        message:"Hi There!"
    }
}
```