// alert('agregado');

// Agregar documentos
export const publicar = (
  title,
  diners,
  timePreparation,
  steps,
  ingredients,
  imageToPost
) => {
  const db = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const date = new Date();
  const user = usuario();
  db.collection('recipe')
    .add({
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
        foto: imageToPost,
        date,
        likes: [],
      },
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      window.location.hash = '#/feed';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// Función para ordenar post en orden descendiente desde su fecha de publicación
export const orderPublish = () => {
  const db = firebase.firestore();
  const recipes = db.collection('recipe');
  return recipes.orderBy('date', 'desc');
};

export const readData = () => {
  const db = firebase.firestore();

  return new Promise((resolve, reject) => {
    db.collection('recipe')
      .get()
      .then((querySnapshot) => {
        const result = [];

        querySnapshot.forEach((doc) => {
          result.push({
            ...doc.data(),
            post: { ...doc.data().post, uid: doc.id },
          });
        });

        return resolve(result);
      })
      .catch((err) => reject(err));
  });
};

export const savePhoto = (file, metadata) => {
  const uploader = document.getElementById('uploader');
  const storage = firebase
    .app()
    .storage('gs://red-social---easycook.appspot.com');
  const storageRef = storage.ref();
  const photosRef = storageRef.child(`photos/${file.name}`).put(file, metadata);

  return new Promise((resolve, reject) => {
    try {
      return photosRef.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = progress;
        },
        (error) => {
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
              console.log('testing');
          }
        },
        () => {
          photosRef.snapshot.ref
            .getDownloadURL()
            .then((downloadURL) => resolve(downloadURL));
        }
      );
    } catch (error) {
      console.log('error', error);
      return reject(error);
    }
  });
};

export const printPhoto = (file) => {
  const storage = firebase
    .app()
    .storage('gs://red-social---easycook.appspot.com');
  const storageRef = storage.ref();
  const photosRef = storageRef.child(`photos/${file.name}`);
  // Upload completed successfully, now we can get the download URL
  photosRef.snapshot.getDownloadURL().then((downloadURL) => {
    const showImg = document.getElementById('post-rct');
    // const photoRecipe = downloadURL
    showImg.innerHTML = `<img scr='${downloadURL}'>`;
    // const templatePhoto = `<img scr='${downloadURL}'>`;
    // showImg.innerHTML = templatePhoto;
  });
};

export const addLikeToPost = async (receipe) => {
  try {
    const db = firebase.firestore();

    const usuario = () => firebase.auth().currentUser;
    const user = usuario();

    const ref = await db.collection('recipe').doc(receipe.post.uid);

    const reciepeInDB = await ref.get();

    // si existe el like del usuario sacalo
    if (reciepeInDB.data().post.likes.includes(user.email)) {
      const likes = receipe.post.likes.filter((elem) => elem !== user.email);

      await ref.update({
        ...receipe,
        post: { ...receipe.post, likes },
      });
    } else {
      // Si no existe el like del usuario ponlo
      const likes = [...receipe.post.likes, user.email];

      await ref.update({
        ...receipe,
        post: { ...receipe.post, likes },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
