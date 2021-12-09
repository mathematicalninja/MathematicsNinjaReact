import { createContext } from "react";
import { colourSpecifier } from "../themeTyping";

interface colourClickContextI {
  click: colourSpecifier;
  setClick: (click: colourSpecifier) => void;
}

const colourClickContext = createContext<colourClickContextI>({
  click: { value: "0", colour: "Grey" },
  setClick: (click: colourSpecifier) => {},
});

export default colourClickContext;
