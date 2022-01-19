interface menuItemInterface {
  text: string;
  uri: string;
  children?: menuItemInterface[];
}

export interface menuItemsInterface extends Array<menuItemInterface> {}
// need to interface with /folder/pageA linking to /pageB
const menuItems: menuItemInterface[] = [
  {
    text: "Home",
    uri: `/`,
  },

  // need to add a "remove whitespace" so the gridtemplate columns can take e.g. `tic tac toe` as input
  {
    text: "TicTacToe",
    // uri: "Games/TicTacToe",
    uri: "/TicTacToe",
  },
  { text: "connect4", uri: "/connect4" },
  { text: "Clocks", uri: "/Clocks" },
  { text: "Colours", uri: "/ColourSwatch" },
];

export default menuItems;
