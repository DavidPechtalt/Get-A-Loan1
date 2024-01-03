import React, { createContext, useContext, useState } from "react";
const OpenConfirm = createContext();
const SetOpenConfirm= createContext();
const OpenReject = createContext();
const SetOpenReject = createContext();
export function useConfirmOpen() {
  return [useContext(OpenConfirm), useContext(SetOpenConfirm)];
}
export function useRejectOpen() {
    return [useContext(OpenReject), useContext(SetOpenReject)];
  }
export default function OpenProvider({ children }) {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  return (
    <OpenConfirm.Provider value={openConfirm}>
        <SetOpenConfirm.Provider value={setOpenConfirm}>
            <OpenReject.Provider value={openReject}>
                <SetOpenReject.Provider value={setOpenReject}>
                    {children}
                </SetOpenReject.Provider>
            </OpenReject.Provider>
        </SetOpenConfirm.Provider>
     
    </OpenConfirm.Provider>
  );
}
