import React, { createContext, useContext, useState } from "react";
const SelectedContext = createContext();
const SetSelectedContext = createContext();
export function useSelected() {
  return [useContext(SelectedContext), useContext(SetSelectedContext)];
}
export default function SelectedProvider({ children }) {
  const [selected, setSelected] = useState();
  return (
    <SelectedContext.Provider value={selected}>
      <SetSelectedContext.Provider value={setSelected}>
        {children}
      </SetSelectedContext.Provider>
    </SelectedContext.Provider>
  );
}
