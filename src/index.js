import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game from "./components/Game.js"

import "./fonts/Lora-VariableFont_wght.ttf"


// ========================================

ReactDOM.render(
	<Game sizeOfSquare={5} />,
	document.getElementById('root')
);
