import React, { createContext, useContext, useEffect, useState } from 'react';

const TagsContext = createContext();

export const TagsProvider = ({ children }) => {

  const [selectedTags, setSelectedTags] = useState([])


  return (
    <TagsContext.Provider value={{ selectedTags, setSelectedTags }}>
      {children}
    </TagsContext.Provider>
  )
}

export const Tags = () => {
  return useContext(TagsContext)
}