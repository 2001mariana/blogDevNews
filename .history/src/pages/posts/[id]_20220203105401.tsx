import { useRouter } from "next/router"

interface Comment {
   id: string
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
  