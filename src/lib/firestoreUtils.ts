import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function writeToFirestore(convoState: any, email?: string) {
  if (!email || email.length === 0) {
    alert("No email found. Not saving your progress.");
    return;
  }

  console.log("progress baby", convoState.value.progress);

  const timestamp = serverTimestamp(); // Get the server timestamp

  const toWrite = {
    progress: convoState.value.progress.slice(-1)[0],
    model: convoState.value.model,
    time_taken: convoState.value.clock.currentTimeSpent,
    audio: convoState.value.audio,
    timestamp: timestamp,
    sentiments: convoState.value.sentiments,
    focused: convoState.value.researchMode.focused,
    questionType: convoState.value.questionType,
    numProblems: convoState.value.numProblems,
    stt: convoState.value.stt,
  };

  // if any of the fields are undefined, log them out
  for (const [key, value] of Object.entries(toWrite)) {
    if (value === undefined) {
      console.log(`UNDEFINED ENTRY: Key: ${key}, Value: ${value}`);
    }
  }

  console.log("******WRITING TO FIRESTORE******");
  console.log(toWrite);
  console.log("******WRITING TO FIRESTORE******");

  const docRef = await addDoc(
    collection(db, `users/${email}/exercises`),
    toWrite
  );
  console.log("Document written with ID: ", docRef.id);
}
