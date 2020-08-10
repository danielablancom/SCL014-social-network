/* eslint-disable no-console */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-alert */

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: 'AIzaSyChX-DppiakvuefaxODjurMrK29EQ4PfdQ',
  authDomain: 'red-social---easycook.firebaseapp.com',
  databaseURL: 'https://red-social---easycook.firebaseio.com',
  projectId: 'red-social---easycook',
  storageBucket: 'red-social---easycook.appspot.com',
  messagingSenderId: '1063020391578',
  appId: '1:1063020391578:web:4970c3e0893c40298dc323',
  measurementId: 'G-F4ES2DG92M',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
firebase.analytics();

// aqui exportaras las funciones que necesites
export const myFunction = () => {
  console.log('Hola');
};

// SingUp
export const registerFirebase = (signupEmail, signupPassword) => auth
  .createUserWithEmailAndPassword(signupEmail, signupPassword)
  .then(() => {
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

// Signin
export const SignInFirebase = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('shao');
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

// Singin with google
export const googleProvider = () => {
  firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
}; */
