import { useEffect, useState } from "react"

interface Post {
  id: string;
  title: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/posts').then(response => {
     response.json().then(data => {
      setPosts(data)
    });
  });
  }, [])
  return (
     <h1>Olá Dev!</h1>
  )
}
