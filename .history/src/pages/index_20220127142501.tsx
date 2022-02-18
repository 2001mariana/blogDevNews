import { useState } from "react"

interface Post {
  id: string;
  title: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  return (
     <h1>Olá Dev!</h1>
  )
}
