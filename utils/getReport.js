import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const addReport = async (data) => {
  const repo = await setDoc(doc(db, "students", data.registration), {
    name: data.name,
    TypingSpeed: data.speed,
    regNo: data.registration,
  });
};
export { addReport };
