import React from "react";
import Banner from "../header/banner.js"
import Logo from "../header/logo.js"
import SiteNavigation from "../header/SiteNavigation"
import pageContent from "../wrappers/PageContent.js"
import "./PageLayout.scss"




class PageLayout extends React.Component {
    constructor(props) {
        super(props)
        // console.log("Page Layout Load")
        this.state = {
            pageContent: props.pageContent,
            menueItems: props.menueItems,
        }
        // console.log("knjgrpbetahpibaegr", props)
        this.updatePageContent = (content) => props.updatePageContent(content)
    }

    static getDerivedStateFromProps(props, state) {
        // Any time the current user changes,
        // Reset any parts of state that are tied to that user.
        // In this simple example, that's just the email.
        if (props.userID !== state.prevPropsUserID) {
            return {
                prevPropsUserID: props.userID,
                email: props.defaultEmail
            };
        }
        return null;
    }

    render() {
        // console.log(this.state)

        return <div className="pageLayout">
            <div className="siteNavigation"
                key="siteNavigation">

                <SiteNavigation
                    menueItems={this.state.menueItems}
                    choosePage={(ref) => this.updatePageContent(ref)}
                />
            </div>
            <div className="siteLogo"
                key="siteLogo">
                <Logo />
            </div>
            <div className="siteBanner"
                key="siteBanner">
                <Banner />
            </div>
            <div className="pageContent"
                key="pageContent">
                {pageContent(this.state.pageContent)}
            </div>
        </div>
    }
}

export default PageLayout