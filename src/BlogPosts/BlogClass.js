import React from "react";


class BlogClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("BlogClass load")
    }

    render() {
        return <div>{require("./Sample.txt")}</div>
    }
}

export default BlogClass