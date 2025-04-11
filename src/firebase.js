// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwbr2jSfEVseL-FdKuLZ5OpzyP2KYpkAk",
  authDomain: "coderhouse-lizana-ecom.firebaseapp.com",
  projectId: "coderhouse-lizana-ecom",
  storageBucket: "coderhouse-lizana-ecom.firebasestorage.app",
  messagingSenderId: "950719843123",
  appId: "1:950719843123:web:72daf092688f09535f4c46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function getItems() {
  const firestore = getFirestore(app);
  const itemsCollection = collection(firestore, "items");
  const items = await getDocs(itemsCollection)
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return items;
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
    });

  return items;
}

export async function getItemByCategory(category) {

  // Use Firebase in production
  const firestore = getFirestore(app);
  const itemsCollection = collection(firestore, "items");
  const categoryQuery = query(
    itemsCollection,
    where("category", "==", category)
  );
  const items = await getDocs(categoryQuery)
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return items;
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
    });

  return items;
}
export async function getItemById(id) {

  const firestore = getFirestore(app);
  const itemDocRef = doc(firestore, "items", id);
  try {
    const itemDoc = await getDoc(itemDocRef);
    if (itemDoc.exists()) {
      return { id: itemDoc.id, ...itemDoc.data() };
    } else {
      console.error("No hay documento con ese ID");
      return null;
    }
  } catch (error) {
    console.error("Fallo traer ids", error);
    return null;
  }
}

export async function getStock(id) {
  const firestore = getFirestore(app);
  const itemDocRef = doc(firestore, "items", id);
  try {
    const itemDoc = await getDoc(itemDocRef);
    if (itemDoc.exists()) {
      return itemDoc.data().stock;
    } else {
      console.error("No hay documento con ese ID");
      return null;
    }
  } catch (error) {
    console.error("Fallo traer ids", error);
    return null;
  }
}

export async function getProductsByPage(page) {
  const firestore = getFirestore(app);
  const itemsCollection = collection(firestore, "items");
  const items = await getDocs(itemsCollection)
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return items;
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
    });

  return items.slice(page * 10, (page + 1) * 10);
}

export async function getProductsByPageByCategory(category, page) {
  const firestore = getFirestore(app);
  const itemsCollection = collection(firestore, "items");
  const categoryQuery = query(
    itemsCollection,
    where("category", "==", category)
  );
  const items = await getDocs(categoryQuery)
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return { items, total: snapshot.size };
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
    });
  return items.slice(page * 10, (page + 1) * 10);
}
export async function createOrder(order) {
  const firestore = getFirestore(app);
  const ordersCollection = collection(firestore, "orders");
  const orderDoc = await addDoc(ordersCollection, order);
  return orderDoc.id
}

export async function getOrderById(id) {
  const firestore = getFirestore(app);
  const orderDocRef = doc(firestore, "orders", id);
  try {
    const orderDoc = await getDoc(orderDocRef);
    if (orderDoc.exists()) {
      return { id: orderDoc.id, ...orderDoc.data() };
    } else {
      console.error("No hay documento con ese ID");
      return null;
    }
  } catch (error) {
    console.error("Fallo traer ids", error);
    return null;
  }
}
export async function updateStock(id, stock) {
  const firestore = getFirestore(app);
  const itemDocRef = doc(firestore, "items", id);
  try {
    await updateDoc(itemDocRef, { stock: stock });
  } catch (error) {
    console.error("Fallo actualizar el stock", error);
  }
}
