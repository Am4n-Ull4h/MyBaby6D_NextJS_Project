
import { db } from "@/app/firebase/config";
import { ref, set } from "firebase/database";

export async function addUserToDatabase(uid) {
  try {
    const userRef = ref(db, `users/${uid}`);
    await set(userRef, {
      credits: 1  // Initialize with 1 free credit
    });
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}
