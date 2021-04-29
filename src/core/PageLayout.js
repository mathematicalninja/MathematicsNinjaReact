import React from "react";
import Banner from "./banner.js"
import Logo from "./logo.js"
import SiteNavigation from "./SiteNavigation.js"
import PageContent from "./PageContent.js"
import "./PageLayout.scss"

class PageLayout extends React.Component {
    constructor(props) {
        super(props)
        console.log("Page Layout Load")
        this.state = {
            pageContent: props.pageContent,
        }
    }
    render() {
        return <div className="pageLayout">
            <div className="siteNavigation">
                <SiteNavigation />
            </div>
            <div className="siteLogo">
                <Logo />
            </div>
            <div className="siteBanner">
                <Banner />
            </div>
            <div className="pageContent">
                <PageContent pageContent={this.state.pageContent} />
            </div>
        </div>
    }
}

export default PageLayout