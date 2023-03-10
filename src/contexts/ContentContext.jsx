import React, { createContext, useState } from "react";

export const ContentContext = createContext();

function ContentProvider({ children }) {
  const [content, setContent] = useState("Painel");

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export default ContentProvider;
