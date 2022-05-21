import { createContext, useContext, useState } from 'react';

const UserComponentsContext = createContext();

export function UserComponentsProvider({ children }) {

  const [userComponent, setUserComponent] = useState('myDetails')

  return (
    <UserComponentsContext.Provider value={{ userComponent, setUserComponent }}>
      {children}
    </UserComponentsContext.Provider>
  );
}

export function useAppContext() {
  return useContext(UserComponentsContext);
}

