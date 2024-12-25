"use client";

import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        router.push("/dashboard");
      } else {
        setUser(null);
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const { uid, email, displayName } = result.user;

    // Save user to MongoDB
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid, email, name: displayName }),
    });
  };

  return (
    <div>
      {user ? children : <button onClick={signInWithGoogle}>Sign in with Google</button>}
    </div>
  );
}
