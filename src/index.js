import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// import ConnectFourBoard from "./components/ConnectFourBoard.js"
// import ConnectFourColumn from "./components/ConnectFourColumn.js"
// import Tile from "./components/Tile.js"
import TicTac from "./components/TicTac.js"

// ========================================

ReactDOM.render(
	// <ConnectFourBoard numberOfColumns={7} numberOfRows={6} />,
	<TicTac sizeOfSquare={5} />,
	// <ConnectFourColumn numberOfRows={6} />,
	// <Tile tileType=""></Tile>,
	document.getElementById('root')
);
