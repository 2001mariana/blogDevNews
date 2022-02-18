import SEO from "../components/SEO";
import styles from "../styles"

export default function Home() {
 
  return (
    <>
    <SEO title="Dev News!" excludeTitleSuffix />
    <main>
      <section>
        <span>Olá Dev!</span>
        <h1>
          Bem vindo e bem vinda ao <br/>
          <span>Dev</span>News!
        </h1>
        <p>
          Um blog com conteúdos extremamente  <br />
          <span>relevantes para o seu aprendizado.</span>
        </p>
      </section>
      <img src="/home.svg" alt="Home image" />
    </main>
    </>   
  )
}
