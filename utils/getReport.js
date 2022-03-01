import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getReport = async () => {
  const sturendtCollection = collection(db, "students");
  const data = await getDocs(sturendtCollection);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export { getReport };
