export interface PostInterface {
    name:string,
    subtitle:string,
    time:Date,
    image:string,
    description:string
}
export function Post({name,subtitle,time,image,description}:PostInterface) {

    return <div style={{border:"1px solid black", width:200, borderRadius:10, padding:10, margin:10}}>
        <h3>{name}</h3>
        <div>Title: {subtitle}</div>
        <div>Postetd At:{time.toDateString()}</div>
        <div>{image}</div>
        <div>{description}</div>
        
    </div>
}