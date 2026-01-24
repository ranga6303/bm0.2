import React, { createContext } from "react";

export const Servercontext = createContext();

export function ServerinfoLogin({ children }) {
  const server = {
    url: "http://10.212.32.231:3000/api/login",
    req: (rollno, password) => ({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rollno, password })
    })
  };

  return (
    <Servercontext.Provider value={server}>
      {children}
    </Servercontext.Provider>
  );
}
