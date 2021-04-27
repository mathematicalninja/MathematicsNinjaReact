import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// import ConnectFourBoard from "./components/ConnectFourBoard.js"
// import ConnectFourColumn from "./components/ConnectFourColumn.js"
// import Tile from "./components/Tile.js"
import TicTac from "./components/TicTac.js"
import ConnectFour from "./components/connectFour.js"

// ========================================

ReactDOM.render(
	// <TicTac gridSize={[3, 3]} />,
	<ConnectFour />,
	document.getElementById('root')
);
