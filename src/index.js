import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ConnectFourBoard from "./components/ConnectFourBoard.js"
// import ConnectFourColumn from "./components/ConnectFourColumn.js"
// import Tile from "./components/Tile.js"


// ========================================

ReactDOM.render(
	// <ConnectFourBoard numberOfColumns={7} numberOfRows={6} />,
	<ConnectFourBoard numberOfRows={6} numberOfColumns={7} />,
	// <ConnectFourColumn numberOfRows={6} />,
	// <Tile tileType=""></Tile>,
	document.getElementById('root')
);
