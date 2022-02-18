import React from "react";
import Banner from "../header/banner";
import Logo from "../header/logo";
import SiteNavigation from "../header/SiteNavigation";
import "./PageLayout.scss";

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageContent: props.pageContent,
      menuItems: props.menuItems,
    };
    // this.updatePageContent = (content) => props.updatePageContent(content);
  }

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.userID !== state.prevPropsUserID) {
      return {
        prevPropsUserID: props.userID,
        email: props.defaultEmail,
      };
    }
    return null;
  }

  render() {
    return (
      <div className="pageLayout">
        {/* <SiteNavigation
          choosePage={(name: string) => {
            return;
          }}
          menuItems={{}}
          // menuItems={this.state.menuItems}
          // choosePage={(ref) => this.updatePageContent(ref)}
        />
        {/* <Logo /> */}
        {/* <Logo className="Logo" key="Logo" />
        <Banner /> */}
        <div className="pageContent" key="pageContent">
          {/* {pageContent(this.state.pageContent)} */}
        </div>
      </div>
    );
  }
}

export default PageLayout;
