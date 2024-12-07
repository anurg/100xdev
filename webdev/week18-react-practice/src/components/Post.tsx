
export interface Post {
    name:string,
}

export function PostComponent({name}:Post) {

    return (
    <div>
      {name}
    </div>
    )
  }