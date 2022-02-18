import { useRouter } from "next/router"

interface Comment

export default function Post() {
    const router = useRouter();
    return (
       <>
       <h1>{router.query.id}</h1>
       <p>{router.asPath}</p>
      </>
       
    )
  }
  