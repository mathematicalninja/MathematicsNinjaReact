import React from "react"
// mostly a wrapper, so I an stylaise mini-windows etc later.


class PageContent extends React.Component {
    constructor(props) {
        super(props)
        console.log("PageContent load")
        this.state = {
            pageContent: props.pageContent,
        }
    }
    render() {
        return (this.state.pageContent)
    }
}

function pageContent(pageContent) {
    // console.log("oops here we are again", props.pageContent)
    return (pageContent)
}

export default pageContent