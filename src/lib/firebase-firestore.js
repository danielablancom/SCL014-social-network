// alert('agregado');
// Initializa Firestore

const db = firebase.firestore();

export const publicar = () => {
  const taskRecipe = document.getElementById('btn-publish');

  taskRecipe.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.querySelector('#title-rct').value;
    const diners = document.querySelector('#comensales').value;
    const timePreparation = document.querySelector('#time-rct').value;
    const steps = document.querySelector('#steps').value;
    const ingredients = document.querySelector('#ingredient').value;

    db.collection('recipe').add({
      title,
      diners,
      timePreparation,
      steps,
      ingredients,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
};

/* const saveRecipe = (title, diners, timePreparation, steps, ingredients) => {
  db.collection('recipe').doc().set({
    title,
    diners,
    timePreparation,
    steps,
    ingredients,
  });
}; */
