

export default function Posts() {
    return (
      <div>
      <h1>Listagem de Posts</h1>
      <ul>
        {posts.map((post) => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </div>
    )
  }