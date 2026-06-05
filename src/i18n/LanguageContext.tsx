import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "en" | "sv";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (strings: { en: string; sv: string }) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (s) => s.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = useCallback(
    (strings: { en: string; sv: string }) => strings[lang],
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
