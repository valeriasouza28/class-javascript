body {
  /* onde determinamos espaços ao redor do body que é o margin, eu também posso ter preenchimento que no caso é o padding */
  /* margin: 0px;  */
  font-family: 'Open Sans', sans-serif;
}

.page {
  /* coloca uma borda ao redor da página para exemplificar 
  border: 1px solid red;*/
  /* largura da página */
  width: 1000px;
  /* espaços ao redor da página está em cima 65px, nos lados automático, e em baixo 0px */
  margin: 65px auto 0;
}

header {
  
  /* A propriedade abreviada do flex CSS define como um item flexível crescerá ou encolherá para caber no espaço disponível em seu contêiner flexível. */
  display: flex;

  /* define como o navegador distribui o espaço entre e ao redor dos itens de conteúdo ao longo do eixo principal */
  justify-content: space-between;

  /* centraliza elementos  */
  align-items: center;

  /* espaço entre o header e o main */
  margin-bottom: 55px;
}

/* --- tempo de video 04:27 */

/* pega a ul do header */
 ul {
  display: flex;
  
  /* retira pontinho das listas */
  list-style: none;
  margin: 0;
  padding: 0;

  /* A propriedade CSS gap define os espaços (medianizes) entre linhas e colunas. É uma abreviação de gap de   linha e gap de coluna. */
   gap: 48 px; 
  
}

/* para tirar o sublinhado do link */
/* ul li a { */
  /* text-decoration: none; */
/* } */

/* deixa a fonte do menu escura ao posicionar o mouse em cima */
/* ul li a:hover { */
/* font-weight: bold; */
/* } */

/* h1, ul { */
  /* font-family: 'Mulish', sans-serif; */

/* } */