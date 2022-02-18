import SEO from "../components/SEO";

export default function Home() {
 
  return (
    <>
    <main>
      <section>
        <span>Olá Dev!</span>
        <h1>
          Bem vindo e bem vinda ao <br/>
          <span></span>
        </h1>
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