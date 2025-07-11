// firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-config.json'); // path to your downloaded file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://-----.firebaseio.com", // optional for Firestore
});

const db = admin.firestore(); // Firestore reference
module.exports = { admin, db };
