import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        setEmail(authUser.email); // Update the email state
        console.log('user is logged in');
        console.log(email)
      } else {
        setUser(false);
        setEmail(null); // Clear the email state
        console.log('user is logged out');
      }
    });

    return () => unsubscribe();
  }, []);

  return [user, email];
}
