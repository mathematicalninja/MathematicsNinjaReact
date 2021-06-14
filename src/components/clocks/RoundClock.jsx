import MiniClock from "./MiniClock"

function ArcChunk(props) {
    let {internalAngle, externalAngle, arcGap, arcWidth} = props
    let radianInternalAngle = Math.PI * internalAngle / 180
    let radianExternalAngle = Math.PI * externalAngle / 180

    const A = [
        arcGap * Math.sin(radianExternalAngle),
        -arcGap * Math.cos(radianExternalAngle)
    ]
    const B = [
        (arcGap + arcWidth) * Math.sin(radianExternalAngle),
        -(arcGap + arcWidth) * Math.cos(radianExternalAngle)
    ]
    const C = [
        (arcGap + arcWidth) * Math.sin(radianExternalAngle + radianInternalAngle),
        -(arcGap + arcWidth) * Math.cos(radianExternalAngle + radianInternalAngle)
    ]
    const D = [
        arcGap * Math.sin(radianExternalAngle + radianInternalAngle),
        -arcGap * Math.cos(radianExternalAngle + radianInternalAngle)
    ]


    const arcString = `
    M ${A[0]} ${A[1]}
    L ${B[0]} ${B[1]}
    A ${arcGap + arcWidth} ${arcGap + arcWidth} 0 0 1 ${C[0]} ${C[1]}
    L ${D[0]} ${D[1]}
    A ${arcGap} ${arcGap} 0 0 0 ${A[0]} ${A[1]}
    Z
    `

    return <path id="circleClock" d={arcString} fill={props.fill} stroke="var(--Grey-1)" strokeWidth="0.02px" />


}

function TimeArc(props) {
    let timeShift = 0
    timeShift -= 0.5 * props.offset // center of arc is at the time point if offset == 1
    timeShift += props.smooth * props.smallTime[0] / props.smallTime[1] // nudges the time along as the smaller time ticks
    // let outerShift = props.snapToPrev && props.largeTime ? props.snapToPrev * props.largeTime[0] / props.largeTime : 0
    // console.log({outerShift, props.snapToPrev, props.largeTime[0]})
    let outerShift = 0
    if (props.snapToPrev && props.largeTime) {
        outerShift = 360 * props.snapToPrev * props.largeTime[0] / props.largeTime[1] // rotates the clock to star the time's zero at the larger time's current value
    } else { }
    return <ArcChunk
        internalAngle={360 / props.time[1]}
        externalAngle={360 / props.time[1] * (props.time[0] + timeShift) + outerShift}
        arcGap={props.arcGap}
        arcWidth={props.arcWidth}
        fill={props.fill}
    />
}


class RoundClock extends MiniClock {
    render() {
        let offset = this.props.offset ? this.props.offset : 0
        let smooth = this.props.smooth ? this.props.smooth : 0
        let snapToPrev = this.props.snapToPrev ? this.props.snapToPrev : 0
        return <svg width="430" height="430" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 6 6" version="1.1">
            <TimeArc
                arcGap={0.5}
                arcWidth={2.5}
                smallTime={[this.getTimePart(4, this.state.curTime), 60]}
                time={[this.getTimePart(3, this.state.curTime), 12]}
                // largeTime={this.getTimePart(2, this.state.curTime)}
                fill={this.props.fillHours}
                offset={offset}
                smooth={smooth}
            // snapToPrev={snapToPrev}
            /> {/* hours*/}



            <TimeArc
                arcGap={1}
                arcWidth={2}
                smallTime={[this.getTimePart(6, this.state.curTime), 1000]}
                time={[this.getTimePart(5, this.state.curTime), 60]}
                largeTime={[this.getTimePart(4, this.state.curTime), 60]}
                fill={this.props.fillSeconds}
                offset={offset}
                smooth={this.props.smooth}
                snapToPrev={snapToPrev}
            /> {/*seconds*/}

            <TimeArc
                arcGap={2.75}
                arcWidth={0.25}
                smallTime={[this.getTimePart(5, this.state.curTime), 60]}
                time={[this.getTimePart(4, this.state.curTime), 60]}
                largeTime={[this.getTimePart(3, this.state.curTime), 12]}
                fill={this.props.fillMinutes}
                offset={offset}
                smooth={this.props.smooth}
                snapToPrev={snapToPrev}
            /> {/*minutes*/}

        </svg>
    }
}

export default RoundClock