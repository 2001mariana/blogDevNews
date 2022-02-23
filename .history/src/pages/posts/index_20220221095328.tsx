import  Prismic  de  '@prismício/client' ;
import  {  GetStaticProps  }  de  'próximo' ;
importar  Link  de  'next/link' ;

importar  SEO  de  '../../components/SEO' ;
import  {  getPrismicClient  }  from  '../../services/prismic' ;

import  './posts.module.scss' ;

interface  Post  {
  id : cadeia ;
  título : cadeia ;
}
interface  PostsProps  {
  mensagens : Mensagem [ ] ;
}
exportar  função padrão  Posts ( ) {  
  retornar  (
    < >
      < título SEO  = "Postagens" / > 
      < main  className = "contêiner" >
        < div  className = "postagens" >
          < Link  href = "#" >
            <a> _ _
              < hora > 25 de dezembro de 2021 < / hora >
              < forte > Título < / forte >
              < p > Parágrafo < / p >
            < / a >
          < / Links >
        < / div >
      < / principal >
    < / >
  ) ;
}

export  const  getStaticProps : GetStaticProps  =  assíncrono  ( )  =>  {
  const  prismic  =  getPrismicClient ( ) ;

   resposta  const =  espera  prismic . consulta (
    [ Prismico . predicados . em ( 'document.type' ,  'post' ) ] ,
    {
      fetch : [ 'post.title' ,  'post.content' ] ,
    } ,
  ) ;

  consola . log ( resposta ) ;

  retornar  {
    adereços : { } ,
    revalidar : 60  *  60  *  12 ,  // 12 horas
  } ;
} ;