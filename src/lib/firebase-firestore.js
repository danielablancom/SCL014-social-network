// alert('agregado');

// Agregar documentos
export const publicar = (title, diners, timePreparation, steps, ingredients, photoRecipe) => {
  console.log('');
  const db = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const user = usuario();
  db.collection('recipe').add({
    email: user.email,
    nombre: user.displayName,
    uid: user.uid,
    foto: user.photoURL,
    fotos: photoRecipe,
    /* seguir: follow,
    gusta: likes, */
    post: {
      titulo: title,
      comensales: diners,
      tiempo: timePreparation,
      pasos: steps,
      ingredientes: ingredients,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      window.location.hash = ('#/feed');
      // document.querySelector('#title-rct').value = '';
      // document.querySelector('#time-rct').value = '';
      // document.querySelector('#steps').value = '';
      // document.querySelector('#ingredient').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
export const readData = () => {
  const db = firebase.firestore();
  db
    .collection('recipe')
    // .orderBy('timestamp', 'desc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const muestrame = document.getElementById('container-feed');
        const infoPost = `
      <div id="post-rct" class="container2">
      <div>
      <div>
        <img class="img-post" src='${doc.data().fotos.photosRecipe}'>
      </div>
      <h5>${doc.data().post.titulo}</h5>
      <i class="far fa-heart icon-feed2"></i>
      </div> 
      
      <div class="container3">
          <i class="fas fa-user icon-feed2"></i>
          <img class="user-img" src='${doc.data().foto}'>
            <p>Por: ${doc.data().nombre ? doc.data().nombre : doc.data().email}</p>
        </div>
        <div class="follow-divbutton">
          <button class="btn-follow"> <i class="far fa-heart icon-feed2"><strong>Seguir</strong></i></button>
        </div>
        <a class="details-rcp" href="#/details-rcp">Leer mas...</a>
      </div> 
    </div>
    </div>`;
        muestrame.innerHTML += infoPost;
      });
    });
};
// ${ doc.data().nombre ? doc.data().nombre : doc.data().email }</h3 >
/* <div>
        <img class="img-post" src="./img/Img-recetas/arroz-con-salsa.jpg" alt="">
      </div>
      <div>
        <h5>Arroz con salsa</h5>
        <div>
          <i class="far fa-heart icon-feed2"></i>
        </div>  */
// Create a reference from a Google Cloud Storage URI
// var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg');
