import { SettingsEthernet } from "@mui/icons-material";
import React, { createContext, useContext, useState } from "react";
const OpenConfirm = createContext();
const SetOpenConfirm = createContext();
const OpenReject = createContext();
const SetOpenReject = createContext();
const OpenOnClick = createContext();
const SetOpenOnClick = createContext();
export function useConfirmOpen() {
  return [useContext(OpenConfirm), useContext(SetOpenConfirm)];
}
export function useRejectOpen() {
  return [useContext(OpenReject), useContext(SetOpenReject)];
}
export function useOnClickOpen() {
  return [useContext(OpenOnClick), useContext(SetOpenOnClick)];
}
export default function OpenProvider({ children }) {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  const [openOnClick, setOpenOnClick] = useState(false);
  return (
    <OpenConfirm.Provider value={openConfirm}>
      <SetOpenConfirm.Provider value={setOpenConfirm}>
        <OpenReject.Provider value={openReject}>
          <SetOpenReject.Provider value={setOpenReject}>
            <OpenOnClick.Provider value={openOnClick}>
              <SetOpenOnClick.Provider value={setOpenOnClick}>
                {" "}
                {children}
              </SetOpenOnClick.Provider>
            </OpenOnClick.Provider>
          </SetOpenReject.Provider>
        </OpenReject.Provider>
      </SetOpenConfirm.Provider>
    </OpenConfirm.Provider>
  );
}
