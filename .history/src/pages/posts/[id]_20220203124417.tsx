import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router"

interface Comment {
   id: string;
   body: string;
}

interface CommentsProps {
   comments: Comment[];
}

export default function Post({ comments }: CommentsProps) {
    const router = useRouter();

    if(router.isFallback) {
       return <p>Loading...</p>
    }

    return (
       <>
       <h1>Post {router.query.id}</h1>
       <ul>
        {comments.map((comment) => (<li key={comment.id}>{comment.body}</li>))}
      </ul>
      </>
       
    )
  }

  export const getStaticPaths: GetStaticPaths = async () => {

   return {
     paths,
     fallback: false,
   };
 };
 
 export const getStaticProps: GetStaticProps<CommentsProps> = async context => {
   const { id } = context.params;
   const response = await fetch(`http://localhost:3333/comments?postId=${id}`);
   const comments = await response.json();
 
   return {
     props: {
       comments,
     },
     revalidate: 5, // In seconds
   };
 };