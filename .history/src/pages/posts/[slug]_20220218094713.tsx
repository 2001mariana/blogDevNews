import  { useRouter }  de  'próximo/roteador'

exportar  função padrão  Post ( ) {  
   roteador  const =  useRouter ( ) ;

  retornar  (
    < >
      < h1 > Post { roteador . consulta . id } < / h1 >
      < p > { roteador . asPath } < / p >
    < / >
  )
}