import { readData, addLikeToPost } from '../firebase-firestore.js';

export const feed = () => {
  const divFeed = document.createElement('div');
  const viewFeed = `
  <header>
    <div class="container-logo">
      <i class="fas fa-chevron-left flecha"></i>
      <img class="logo-header" src="./img/iconos/LOGO.jpg">
    </div>
    <div class="container-icon">
      <a href="#/post" id="go-form-recipe"><i class="fas fa-plus icon-feed"></i></a>
      <i class="fas fa-search icon-feed"></i>
      <i class="fas fa-user icon-feed"></i>
      <i class="fas fa-filter icon-feed"></i>
    </div>
  </header>
  <section>
    <div class="imagesFeed">
      <img class="images" src="./img/Img-recetas/rapido-y-facil.jpg" alt="">
      <img class="images" src="./img/Img-recetas/comida-saludable.jpg" alt="">
      <img class="images" src="./img/Img-recetas/comida-vegana.jpg" alt="">
    </div>
    <div class="btn-feed">
      <button class="btn">Rápido y facil</button>
      <button class="btn">Saludable</button>
      <button class="btn">Vegano</button>
    </div>

    <div class="PostRec">
      <h2>| Publicaciones recientes</h2>
    </div>

    <div id="container-feed">
    </div>

  </section> `;
  readData().then((receipes) => {
    const muestrame = document.getElementById('container-feed');
    receipes.forEach((receipe, index) => {
      const data = `
      <div id="post-rct" class="container2">
      <div class="post">
      <div>
        <img class="img-post" src='${receipe.post.foto}'>
      </div>

      <div>
      <h5>${receipe.post.titulo}</h5>
      <button class="btn-like"><i class="far fa-heart icon-feed2" index="${index}" ></i></button>
       <div class="container3">
        <img class="user-img" src='${
          receipe.foto ? receipe.foto : '../img/iconos/cook.jpg'
        }'>
        <p>Por: ${receipe.nombre ? receipe.nombre : receipe.email}</p>
      </div>
      <div class="follow-divbutton">
        <button class="btn-follow"> <i class="fas fa-user icon-feed2"> Seguir</i></button>
      </div>
      <a class="details-rcp" href="#/detailsRcp">Leer más...</a>
      </div> 
      </div>
      </div>`;

      muestrame.innerHTML += data;
    });

    const test = muestrame.querySelectorAll('.btn-like');

    test.forEach((el) =>
      el.addEventListener('click', (event) => {
        const position = event.target.getAttribute('index');

        addLikeToPost(receipes[position]);

        // llamar a la funcion de firebase-firestore addLikeToPost
        // esta funcion va a recibir como parametro el id del post y el usuario
        // la receta ahora debe tener un nuevo atributo llado likes
        // donde se va a guardar el nombre del usuario que le dio like
        /*
        post: {
          likes: ['usuario1']
        }
        */
      })
    );
  });
  // orderPublish();

  divFeed.innerHTML = viewFeed;

  return divFeed;
};
