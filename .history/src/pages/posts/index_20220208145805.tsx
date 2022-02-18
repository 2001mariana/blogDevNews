import { GetStaticProps } from "next"
import SEO from "../../components/SEO";

interface Post {
   id: string;
   title: string;
 }
 
 interface PostsProps {
   posts: Post[];
 }

export default function Posts() {
    return (
      <>
        <SEO title="Posts" />
        <main>

        </main>
      </>
    )
  }

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {},
      revalidate: 60 * 60 * 12 //12 horas
   };
};