import React from "react";

export interface QuirkClockInputs {

    "timeOrder":Array<number>;
    "timeObject":Date;



    // "backgroundColor"?: string;
    // "fontSize"?: string;
    // "name"?:string;

    // "color"?: string;
    // "paddingLeft"?: string;
    // "paddingRight"?: string;
    // "border"?: string;
    // "textAlign"?: string;

    // "offset"?:number;
    // "smooth"?:number;
    // "snapToPrev"?:number
    // "fillHours"?:string;
    // "fillSeconds"?:string;
    // "fillMinutes"?:string;
}

export interface QuirkClockState {
    curTime: Date,
    intervalID?:NodeJS.Timeout
}

abstract class QuirkClock<P extends QuirkClockInputs> extends React.Component<P> {

    //prep work, needed to give basic functionality

    constructor(props:P) {
        super(props);
        this.state = {
            curTime: new Date(),
        };
    }

    componentDidMount() {
        let intervalID = setInterval(() => {
            this.setState({
                curTime: new Date()
            })
        }, 10)
        this.setState({intervalID: intervalID})
        // console.log(this)
    }

    componentWillUnmount() {
        // clearInterval(this.state.intervalID);
    }

    abstract render():any



    // used to convert a timeOrder into specific time parts
    getTimePart(integer:number, timeObject:Date): number {
        switch (integer) {
            case 0:
                return timeObject.getFullYear()
            case 1:
                return timeObject.getMonth()
            case 2:
                return timeObject.getUTCDay()
            case 3:
                return timeObject.getHours()
            case 4:
                return timeObject.getMinutes()
            case 5:
                return timeObject.getSeconds()
            case 6:
                return timeObject.getMilliseconds()
            default:
                return 0
        }
    }
    // as above, but in string form
    getString(integer:number, timeObject:Date):string {
        return this.getTimePart(integer, timeObject).toString()
    }

    // TIME
    returnTimeValues(timeOrder:Array<number>, timeObject:Date, offset:number=3):Array<number>{
        let outArray:Array<number>=[]
        for (const integer of timeOrder) {
            outArray.push(this.getTimePart(integer+offset,timeObject))
        }
        return outArray
    }
    // Clock.getTime() returns the time according to the Clock object
    getTime():Array<number>{
        return this.returnTimeValues(this.props.timeOrder, this.props.timeObject, 3)
    }

    timePiece(integer:number, timeObject:Date):string {
        // 0 is largest time (hours), getting smaller by integer.
        return this.getString(integer + 3, timeObject).padStart(2, "0")
    }
    timeChunk(timeOrder: Array<number>, timeObject:Date):Array<string|JSX.Element> {
        let timeString = []
        for (const integer of timeOrder) {
            timeString.push(this.timePiece(integer, timeObject))
            timeString.push(":")
        }
        timeString.pop()
        timeString.push(<br />)
        return timeString
    }




    // DATE
    getDate():Array<number>{
        return this.returnTimeValues(this.props.timeOrder,this.props.timeObject)
    }
    datePiece(integer:number, dateObject:Date):string{
        // 0 is largest time (years), getting smaller by integer.
        return this.getString(integer, dateObject).padStart(2, "0").slice(-2)
    }

    dateChunk(timeOrder: Array<number>, timeObject:Date):Array<string|JSX.Element> {
        let dateString = []
        for (const integer of timeOrder) {
            dateString.push(this.datePiece(integer, timeObject))
            dateString.push("/")
        }
        dateString.pop()
        dateString.push(<br />)
        return dateString
    }
}

export default QuirkClock