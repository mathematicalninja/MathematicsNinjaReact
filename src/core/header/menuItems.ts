interface menuItemInterface {
  text: string;
  uri: string;
  children?: menuItemInterface[];
}

export interface menuItemsInterface extends Array<menuItemInterface> {}

const menuItems: menuItemInterface[] = [
  {
    text: "NGU100",
    uri: "NGU100",
  },
  {
    text: "index",
    uri: `/`,
  },
  {
    text: "TicTacToe",
    uri: "TicTacToe",
  },
];

export default menuItems;
