// import "./HistoryControls.scss"

function HistoryControls(props) {
    // need to add in styling to these controls

    const historyButtons = props.history.map((irreleventIndex, moveIndex) => {
        const description = moveIndex ?
            "Move number " + moveIndex + "." :
            "Back to the start.";
        return (
            <div key={ moveIndex } >
                <button
                    onClick={ () => props.timeTravel(moveIndex) }
                    className="timeTravelButton"
                >
                    { description }
                </button>
            </div>
        )

    })
    return historyButtons
}

export default HistoryControls