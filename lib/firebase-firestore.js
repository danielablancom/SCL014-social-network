// console.log('agregado');
// Initializa Firestore

/* const db = firebase.firestore();

export const user = () => {
  db.collection('users').add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

const taskRecipe = document.getElementById('btn-publish');

taskRecipe.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.querySelector('#title-rct').value;
  const diners = document.querySelector('#comensales').value;
  const timePreparation = document.querySelector('#time-rct').value;
  const steps = document.querySelector('#steps').value;
  const ingredients = document.querySelector('#ingredient').value;

  const response = await db.collection('tasks').set({
    title,
    diners,
    timePreparation,
    steps,
    ingredients,
  });
  console.log(response);
  console.log(title, ingredients);
}); */
