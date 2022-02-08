import firebase from 'firebase';
import toast from "react-simple-toasts";

const signout = async() => {
    try {
        firebase.auth().signOut().then((authData) => {
            toast('You signed out.', 3000);
            window.location.href = "/";
        })
    } catch (e) {
        console.log(e);
    }
};

const updateFirebaseDB = (path, object) => {
    firebase
    .database()
    .ref(path)
    .update(JSON.parse(JSON.stringify(object)))
};

const addToFirebaseDB = (path, object) => {
    firebase
    .database()
    .ref(path)
    .push(JSON.parse(JSON.stringify(object)));
};

const uploadProfileImage = async (uri, imageName, uid) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    try {
      let ref = firebase.storage().ref().child(`suppliers/${uid}/${imageName}`);
      await ref.put(blob);
      return await firebase
        .storage()
        .ref()
        .child(`suppliers/${uid}/${imageName}`)
        .getDownloadURL();
    } catch (e) {
      toast("Oops! We had a problem uploading your avatar.", 5000);
      return false;
    }
  };


export {
    signout,
    updateFirebaseDB,
    uploadProfileImage,
    addToFirebaseDB
}