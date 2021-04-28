import React from "react"


class PageContent extends React.Component {
    constructor(props) {
        super(props)
        console.log("PageContent load")
    }
    render() {
        return <div>Here's where everything goes.</div>
    }
}

export default PageContent