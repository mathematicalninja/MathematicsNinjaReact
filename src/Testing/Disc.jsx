import React from "react"


class Disc extends React.Component {
    render() {
        let {
            outerEdge,
            outerColour,
            innerEdge,
            innerColour,
            size
        } = this.props


        return (
            <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g id="Disc">
                    <g id="OuterDisc">
                        <rect x="4" y="4" width="248" height="248" rx="124" fill={outerColour} />
                        <g id="InnerDisc">
                            <rect x="100.5" y="100.5" width="55" height="55" rx="27.5" fill={innerColour} />
                            <rect x="100.5" y="100.5" width="55" height="55" rx="27.5" stroke={innerEdge} strokeWidth="5" />
                        </g>
                        <rect x="4" y="4" width="248" height="248" rx="124" stroke={outerEdge} strokeWidth="8" />
                    </g>
                </g>
            </svg>
        )
    }
}

export default Disc