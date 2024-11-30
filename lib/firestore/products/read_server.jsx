import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";


const convertFirestoreTimestamps = (data) => {
  
  if (data.timestampCreate && data.timestampCreate.toDate) {
    
    data.timestampCreate = data.timestampCreate.toDate().toISOString();
  }

  
  if (data.timestampUpdate && data.timestampUpdate.toDate) {
    data.timestampUpdate = data.timestampUpdate.toDate().toISOString();
  }

  return data;
};

// Function to fetch a product by ID
export const getProduct = async ({ id }) => {
  const data = await getDoc(doc(db, `products/${id}`));
  if (data.exists()) {
    return convertFirestoreTimestamps(data.data()); // Ensure proper conversion
  } else {
    return null;
  }
};

// Fetch featured products
export const getFeaturedProducts = async () => {
  const list = await getDocs(
    query(collection(db, "products"), where("isFeatured", "==", true))
  );
  return list.docs.map((snap) => convertFirestoreTimestamps(snap.data())); // Convert timestamps
};

// Fetch all products
export const getProducts = async () => {
  const list = await getDocs(
    query(collection(db, "products"), orderBy("timestampCreate", "desc"))
  );
  return list.docs.map((snap) => convertFirestoreTimestamps(snap.data())); // Convert timestamps
};

// Fetch products by category
export const getProductsByCategory = async ({ categoryId }) => {
  const list = await getDocs(
    query(
      collection(db, "products"),
      orderBy("timestampCreate", "desc"),
      where("categoryId", "==", categoryId)
    )
  );
  return list.docs.map((snap) => convertFirestoreTimestamps(snap.data())); // Convert timestamps
};
