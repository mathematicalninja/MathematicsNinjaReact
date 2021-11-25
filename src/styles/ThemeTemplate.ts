import defaultColour from "./themes/default";
import mainColour from "./themes/main";
import { themeStructure } from "./themeTyping";

type themesType = {
  Default: themeStructure;
  Main: themeStructure;
};

const themes: themesType = {
  Default: defaultColour,
  Main: mainColour,
};

export default themes;
