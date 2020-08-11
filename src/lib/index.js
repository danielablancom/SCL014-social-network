/* eslint-disable no-lone-blocks */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// aqui exportaras las funciones que necesites
export const myFunction = () => {
//  console.log('Hola');
};

// SingUp
export const registerFirebase = (signupEmail, signupPassword) => {
  console.log('alo');
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
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
