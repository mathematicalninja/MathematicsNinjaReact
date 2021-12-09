import { createContext } from "react";
import themes from "../ThemeTemplate";
import { themeStructure } from "../themeTyping";

interface themeContextI {
  theme: themeStructure;
  setTheme: (theme: themeStructure) => void;
}

const themeContext = createContext<themeContextI>({
  theme: themes.Default,
  setTheme: (theme) => {},
});

export default themeContext;
