const admin = require("firebase-admin");

// Initialize Firebase Admin
const serviceAccount = require("./credentials.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Function to assign a "tester" role to a user
const assignTesterRole = async (uid) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { role: "tester" });
    console.log(`Role "tester" assigned to user ${uid}`);
  } catch (error) {
    console.error("Error assigning role:", error);
  }
};

// Replace 'USER_UID' with the actual UID of the user you want to update
const userUID = "vT7VIjnEjyTJooFQ7c0RzNLSFWl1"; // Update this
assignTesterRole(userUID);
