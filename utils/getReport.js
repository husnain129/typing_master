import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const getReport = async () => {
  const sturendtCollection = collection(db, "students");
  const data = await getDocs(sturendtCollection);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

const addReport = async (data) => {
  const repo = await setDoc(doc(db, "students", "report"), {
    name: data.name,
    TypingSpeed: data.speed,
    regNo: data.registration,
  });
};
export { getReport, addReport };
