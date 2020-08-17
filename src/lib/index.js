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

// Obtén la información de perfil de un usuario
// Obtener el perfil de un usuario
const userInformation = () => {
  const user = firebase.auth().currentUser;
  console.log(user, 'entre a la funcion');
  let name; let email; let photoUrl; let uid; let
    emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }

  if (user != null) {
    user.providerData.forEach((profile) => {
      console.log(`Sign-in provider: ${profile.providerId}`);
      console.log(`  Provider-specific UID: ${profile.uid}`);
      console.log(`  Name: ${profile.displayName}`);
      console.log(`  Email: ${profile.email}`);
      console.log(`  Photo URL: ${profile.photoURL}`);
    });
  }
};

// Signin
export const signInFirebase = async (email, password) => {
  try {
    await auth
      .signInWithEmailAndPassword(email, password);
    userInformation();
    window.location.hash = ('#/feed');
  } catch (error) {
    console.log('error', error);
    const errorCode = error.code;
    if (errorCode === 'auth/wrong-password') {
      alert('La contraseña es incorrecta');
    } else if (errorCode === 'auth/user-not-found'); {
      alert('El usuario es incorrecto o no está registrado');
    }
  }
};

// .then(() => {
//   userInformation();
//   window.location.hash = ('#/feed');
// })
// .catch((error) => {
//   const errorCode = error.code;
//   if (errorCode === 'auth/wrong-password') {
//     alert('La contraseña es incorrecta');
//   } else if (errorCode === 'auth/user-not-found'); {
//     alert('El usuario es incorrecto o no está registrado');
//   }
// });

// Singin with google
export const googleProvider = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    userInformation();
    window.location.hash = ('#/feed');
    // This gives you a Google Access Token.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
  });
};
