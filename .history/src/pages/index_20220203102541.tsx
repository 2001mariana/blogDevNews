import { GetServerSideProps } from "next";
import { useEffect, useState } from "react"

interface Post {
  id: string;
  title: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
 
  return (
    <div>
      l>
        {posts.map((post) => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </div><h1>Posts</h1>
      <u
     
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/posts')
  const posts = await response.json()
  return {
    props: {
      posts
    },
  };
}