import { GetStaticProps } from "next";
import { useRouter } from "next/router"

interface Comment {
   id: string;
   body: string;
}

interface CommentsProps {
   comments: Comment[];
}

export default function Post() {
    const router = useRouter();
    return (
       <>
       <h1>{router.query.id}</h1>
       <p>{router.asPath}</p>
      </>
       
    )
  }

export const getStaticProps: GetStaticProps<CommentsProps> = async (context) => {
   const { id } = context.params;
   const response = await fetch(`http://localhost:3333/posts?id=${id}`)
   const posts = await response.json()~;
   return {
      props: {
         posts,
      },
      revalidate: 5, //in seconds
   };
};