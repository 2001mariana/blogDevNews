import SEO from "../components/SEO";

export default function Home() {
 
  return (
    <>
    <main>
      <section>
        <span></span>
      </section>
    </main>
    </>   
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