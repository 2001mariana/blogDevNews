import { Header } from '../components/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component />
    </>
  )
}

export default MyApp
