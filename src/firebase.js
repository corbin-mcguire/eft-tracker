import { initializeApp } from "firebase/app";
import { getDatabase, update, ref, get, child } from "firebase/database";

let firebaseApp = null;

export const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };
  firebaseApp = initializeApp(firebaseConfig);
};

export const getFirebaseApp = () => {
  if (!firebaseApp) initializeFirebase();
  return getDatabase(firebaseApp);
};

// Your Firebase functions here
export const logKill = async (playerId, playerName, killName) => {
  const db = getFirebaseApp();

  killName = killName.toLowerCase();

  const entry = { killedBy: playerName };

  return update(ref(db, `kills/${killName}`), entry);
};

export const getAllKills = async () => {
  const database = getFirebaseApp();
  const allKillsRef = ref(database);

  try {
    const kills = await get(child(allKillsRef, "kills/"));
    return kills.exists() ? kills.val() : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updatePlayerTokens = async (playerId, tokens, lastDailyCommand = null) => {
  const database = getFirebaseApp();

  const playerUpdate = { tokens };

  return update(ref(database, `players/${playerId}`), playerUpdate);
};
