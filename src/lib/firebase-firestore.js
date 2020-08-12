// alert('agregado');

// Agregar documentos
export const publicar = (title, diners, timePreparation, steps, ingredients) => {
  console.log('por que me tratas asi');
  const db = firebase.firestore();
  const user = () => firebase.auth().currentUser;

  db.collection('recipe').add({
    email: user.email,
    nombre: user.displayName,
    uid: user.uid,
    post: {
      titulo: title,
      comensales: diners,
      tiempo: timePreparation,
      pasos: steps,
      ingredientes: ingredients,
    },
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      // document.querySelector('#title-rct').value = '';
      // document.querySelector('#time-rct').value = '';
      // document.querySelector('#steps').value = '';
      // document.querySelector('#ingredient').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// export const leeme = () => {
//   const db = firebase.firestore();
//   db.collection('recipe').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // console.log(`${doc.id} => ${doc.data().post}`);
//       const muestrame = document.getElementById('outputPost');
//       const infoPost = `<h3>esto fue culpa de ${doc.data().nombre ? doc.data().nombre : doc.data().email}</h3>
//       <p>${doc.data().post}</p>`;
//       muestrame.innerHTML += infoPost;
//     });
//   });
// };
