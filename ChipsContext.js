import React, { createContext, useState } from 'react';

export const ChipsContext = createContext();

export const ChipsProvider = ({ children }) => {
  const [chips, setChips] = useState(['X Egg', 'X Milk', 'Other +']);

  return (
    <ChipsContext.Provider value={[chips, setChips]}>
      {children}
    </ChipsContext.Provider>
  );
};
