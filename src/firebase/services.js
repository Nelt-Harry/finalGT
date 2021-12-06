import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./config";

export const addDocument = async (collectionName, data, documentName) => {
    try {
        await setDoc(doc(db, collectionName, documentName), {
            ...data,
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    return;
};

export const getDocument = async (collectionName, docName) => {
    const docRef = doc(db, collectionName, docName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
};
