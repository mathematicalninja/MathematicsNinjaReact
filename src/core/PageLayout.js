import React from "react";
import Banner from "./banner.js"
import Logo from "./logo.js"
import SiteNavigation from "./SiteNavigation.js"
import PageContent from "./PageContent.js"

class PageLayout extends React.Component {
    constructor(props) {
        super(props)
        console.log("Page Layout Load")
    }
    render() {
        return <div>
            Hello
            <div>
                <SiteNavigation />
                <Logo />
                <Banner />
                <PageContent />
            </div>
        </div>
    }
}

export default PageLayout