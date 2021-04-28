import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import ConnectFourBoard from "./components/ConnectFourBoard.js"
// import ConnectFourColumn from "./components/ConnectFourColumn.js"
// import Tile from "./components/Tile.js"
// import TicTac from "./components/TicTac.js"
// import ConnectFour from "./components/connectFour.js"
import App from "./core/App.js"


// ========================================

ReactDOM.render(
	// <TicTac gridSize={[3, 3]} />,
	// <ConnectFour gridSize={[7, 6]} />,
	<App />,
	document.getElementById('root')
);
