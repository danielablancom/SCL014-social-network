
// alert('agregado');

// Agregar documentos
export const publicar = (title, diners, timePreparation, steps, ingredients) => {
  const db = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const user = usuario();
  db.collection('recipe').add({
    email: user.email,
    nombre: user.displayName,
    uid: user.uid,
    foto: user.photoURL,
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
        muestrame.innerHTML = `
      <div id="post-rct" class="container2">
      <div>
      <div>
        <img class="img-post" src=''>
      </div>
      <h5>${doc.data().post.titulo}</h5>
      <i class="far fa-heart icon-feed2"></i>
      </div> 
      
      <div class="container3">
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
        // muestrame.document.write += infoPost;
      });
    });
};

export const imprimirFotos = (file, metadata) => {
  console.log('HOLISSSSSSS PRUEBA');

  const uploader = document.getElementById('uploader');
  const storage = firebase.app().storage('gs://red-social---easycook.appspot.com');
  const storageRef = storage.ref();
  const photosRef = storageRef.child(`photos/${file.name}`).put(file, metadata);

  photosRef.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = progress;
    }, (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
        default:
          console.log('por que me tratas asi');
      }
    }, () => {
      // Upload completed successfully, now we can get the download URL
      photosRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        const showImg = document.getElementById('post-rct');
        console.log('pruebaaa', showImg);
        // const photoRecipe = downloadURL
        showImg.innerHTML = `<img scr='${downloadURL}'>`;
        // const templatePhoto = `<img scr='${downloadURL}'>`;
        // showImg.innerHTML = templatePhoto;
      });
    });
};
