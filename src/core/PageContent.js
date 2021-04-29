import React from "react"


class PageContent extends React.Component {
    constructor(props) {
        super(props)
        console.log("PageContent load")
        this.state = {
            pageContent: props.pageContent,
        }
    }
    render() {
        return <div>{this.state.pageContent}</div>
    }
}

export default PageContent