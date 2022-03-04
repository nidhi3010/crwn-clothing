import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
  apiKey: "AIzaSyCdrOSSBpZNa4_Gok6y_UJQljjIIGCBB8s",
  authDomain: "crwn-db-f9321.firebaseapp.com",
  projectId: "crwn-db-f9321",
  storageBucket: "crwn-db-f9321.appspot.com",
  messagingSenderId: "974481636969",
  appId: "1:974481636969:web:0bc951cad5bdfe0c24ecf8",
  measurementId: "G-VGBWRX2M8Z"
};

  export const createUserProfileDocument =  async (userAuth, additionalData) => {
 
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


   if(!snapShot.exists) { 

     const { displayName, email } = userAuth;
    
     const createdAt = new Date();


     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
     }catch (error) {
      console.log('error creating user', error.message);
     }
   }
   return userRef;
  };

 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; 