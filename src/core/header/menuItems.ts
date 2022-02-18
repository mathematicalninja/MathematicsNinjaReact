interface menuItemInterface {
  text: string;
  uri: string;
  children?: menuItemInterface[];
}

export interface menuItemsInterface extends Array<menuItemInterface> {}
//TODO: need to interface with /folder/pageA linking to /pageB
const menuItems: menuItemInterface[] = [
  {
    text: "Home",
    uri: `/`,
  },

  //TODO: need to add a "remove whitespace" so the gridtemplate columns can take e.g. `tic tac toe` as input
  {
    text: "TicTacToe",
    uri: "/Games/TicTacToe",
  },
  { text: "connect4", uri: "/Games/connect4" },

  { text: "Clocks", uri: "/Visuals/Clocks" },
  { text: "Colours", uri: "/Visuals/ColourSwatch" },

  { text: "About", uri: "/Info/About" },
];

export default menuItems;
