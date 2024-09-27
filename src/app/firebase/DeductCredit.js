// /lib/deductCredit.js

import { db } from "@/app/firebase/config";
import { ref, get, update } from "firebase/database";

export async function deductCredit(uid) {
  const userRef = ref(db, `users/${uid}/credits`);
  const userSnapshot = await get(userRef);

  if (userSnapshot.exists() && userSnapshot.val() > 0) {
    await update(ref(db, `users/${uid}`), {
      credits: userSnapshot.val() - 1
    });
    return true;
  } else {
    return false;
  }
}
