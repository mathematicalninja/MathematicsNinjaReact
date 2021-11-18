// import Color, * as color from "color";
import Color from "color";

export type colourVariableNumber =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export type colourVariableSet =
  | "Primary"
  | "Secondary"
  | "Accent"
  | "Vivids"
  | "Red"
  | "Amber"
  | "Green"
  | "Grey";

export type colourVariable =
  `var(--${colourVariableSet}-${colourVariableNumber})`;

//
//
//
//
//
//
//
//
//
//
//
//
//

type themeColour = {
  "0": Color;
  "1": Color;
  "2": Color;
  "3": Color;
  "4": Color;
  "5": Color;
  "6": Color;
  "7": Color;
  "8": Color;
  "9": Color;
};

export type themeStructure = {
  Primary: themeColour;
  Secondary: themeColour;
  Accent: themeColour;
  Vivids: themeColour;
  Red: themeColour;
  Amber: themeColour;
  Green: themeColour;
  Grey: themeColour;
};
