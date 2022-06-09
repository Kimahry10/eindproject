import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const AuthenticatedUserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const createUser = (email, password, username, bio, website) => {
    return createUserWithEmailAndPassword(auth, email, password).then((result) => {
      return updateProfile(result.user, {
        // sets displayname and photourl at signup
        displayName: username,
        photoURL: "https://herrmans.eu/wp-content/uploads/2019/01/765-default-avatar.png",
      }).then(() => {
        // adds all extra info from authenticated user
        setDoc(doc(firestore, "users", result.user.uid), {
          displayName: username,
          photoURL: "https://herrmans.eu/wp-content/uploads/2019/01/765-default-avatar.png",
          email: email,
          website: website,
          bio: bio
        });
      }).catch((error) => {
        // An error occurred
        console.error(error)
      });
    });
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <AuthenticatedUserContext.Provider value={{ createUser, user, login, logout }}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthenticatedUserContext)
}