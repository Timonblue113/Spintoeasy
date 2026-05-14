/* =========================
   IMPORT FIREBASE
========================= */

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

/* =========================
   FIREBASE CONFIG
========================= */

/* =========================
   IMPORT FIREBASE
========================= */

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

/* =========================
   FIREBASE CONFIG
========================= */

const firebaseConfig = {
  apiKey: "AIzaSyD35Skj_dI0_X7Nsau6fjpPUN5H-Zza8AY",
  authDomain: "spineasy-user.firebaseapp.com",
  projectId: "spineasy-user",
  storageBucket: "spineasy-user.firebasestorage.app",
  messagingSenderId: "805126611420",
  appId: "1:805126611420:web:59a5605b2b68b35f806f19",
  measurementId: "G-NE80YJTEXN"
};

/* =========================
   INIT FIREBASE
========================= */

const app = initializeApp(firebaseConfig);

/* =========================
   EXPORT
========================= */

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

/* =========================
   INIT FIREBASE
========================= */

const app = initializeApp(firebaseConfig);

/* =========================
   EXPORT
========================= */

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);