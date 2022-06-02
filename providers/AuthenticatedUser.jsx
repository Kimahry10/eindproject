import React, { useEffect, useState } from 'react';

export const AuthenticatedUserContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)


  return (
    <AuthenticatedUserContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}