import "./Square.scss"

function Square(props) {
    return (
        <button
            className={"square" + props.squareType}

            onClick={
                props.onClick
            }
        >
            {props.value}
        </button>
    )
}


export default Square