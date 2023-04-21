import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import {db} from '../Firebase';

const addToFirebase = async (collectionName,  objectToSave ) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), objectToSave);
    console.log(
      "Document written to table " + collectionName + " with ID: ",
      docRef.id
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//TODO: Implement this function
const getFromFirebase = async (collectionName) => {
  try {
    const collRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collRef);
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
    });
    return results;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};
const updateFromFirebase = async (collectionName, docId, updateData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updateData);
    console.log("Document updated with ID: ", docId);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
const deleteFromFirebase = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", docId);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

export { addToFirebase, getFromFirebase, updateFromFirebase, deleteFromFirebase };