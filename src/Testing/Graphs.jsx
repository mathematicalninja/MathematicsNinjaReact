import React, {useState, useEffect, useRef} from 'react';

// Path2D for a Heart SVG
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
const SCALE = 0.1;
const OFFSET = 80;
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function draw(ctx, location) {
    // console.log("attempting to draw")
    ctx.fillStyle = 'red';
    ctx.shadowColor = 'blue';
    ctx.shadowBlur = 15;
    ctx.save();
    ctx.scale(SCALE, SCALE);
    ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
    ctx.rotate(225 * Math.PI / 180);
    ctx.fill(SVG_PATH);
    // .restore(): Canvas 2D API restores the most recently saved canvas state
    ctx.restore();
};

function useCanvas() {
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // draw all coordinates held in state
        coordinates.forEach((coordinate) => {draw(ctx, coordinate)});
    });

    return [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight];
}

function Canvas() {


    const [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight] = useCanvas();

    const handleCanvasClick = (event) => {
        // on each click get current mouse location
        const currentCoord = {x: event.clientX, y: event.clientY};
        // add the newest mouse location to an array in state
        setCoordinates([...coordinates, currentCoord]);
    };

    const handleClearCanvas = (event) => {
        setCoordinates([]);
    };

    return (<div>
        <canvas
            className="App-canvas"
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            onClick={handleCanvasClick} />

        <div className="button" >
            <button onClick={handleClearCanvas} > CLEAR </button>
        </div>
    </div>
    );

}






class Graphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <Canvas />
        );
    }
}
// Sat May 15 2021 20:05:21 GMT+0100 (British Summer Time)

export default Graphs