/* eslint-disable no-lone-blocks */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// aqui exportaras las funciones que necesites
// import { feed } from './lib/views/templateFeed.js';

export const myFunction = () => {
  //  console.log('Hola');
};

// SingUp
export const registerFirebase = (signupEmail, signupPassword) => {
  auth
    .createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then(() => {
      console.log();
      const configuration = {
        url: 'http://localhost:5000/',
      };
      // E-mail de verificación
      const user = auth.currentUser;
      user.sendEmailVerification(configuration).then(() => {
        // Correo electrónico enviado.
        alert('Se envio un mensaje a tu correo electronico');
      })
        .catch(() => {
          alert('ocurrio un problema');
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('El e-mail ya se encuentra registrado');
      } else if (errorCode === 'auth/invalid-emai') {
        alert('El formato del e-mail no es válido');
      } else if (errorCode === 'auth/weak-password') {
        alert('La contraseña debe tener minimo 6 caracteres');
      } else {
        alert(errorMessage);
      }
    });
};

// Signin
export const signInFirebase = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      // let url = window.location.hash;
      // conlsole.log(url);
      window.location.hash = ('#/feed');
      // conlsole.log('shao');

    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('La contraseña es incorrecta');
      } else if (errorCode === 'auth/user-not-found'); {
        alert('El usuario es incorrecto o no está registrado');
      }
    });
};

/* const authFeed = () => {
  showTemplate(hash);
  if (signInFirebase === 'false' || signInFirebase === '') {
    alert('Completa tus datos correctamente para ingresar');
  } else {
    signInFirebase(email, password)
      .then(() => {
        changeRoute('#/feed');
      });
  }
};
authFeed(); */

// Obtener el perfil de un usuario
const user = firebase.auth().currentUser;
console.log(user);
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
}

// Obtén la información de perfil de un usuario

if (user != null) {
  user.providerData.forEach((profile) => {
    console.log(`Sign-in provider: ${profile.providerId}`);
    console.log(`  Provider-specific UID: ${profile.uid}`);
    console.log(`  Name: ${profile.displayName}`);
    console.log(`  Email: ${profile.email}`);
    console.log(`  Photo URL: ${profile.photoURL}`);
  });
}
// Singin with google
export const googleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
