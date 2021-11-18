import React from "react";
import Banner from "./banner";
import choosePage from "./choosePage";
import DesktopHeader from "./desktopHeader";
import Logo from "./logo";
import SelfPortrait from "./SelfPortrait";
import SiteNavigation from "./SiteNavigation";

interface PageHeaderProps {
  layout: "desktop" | "mobile";
}
const scssStuff = `
.pageLayout {
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "siteLogo siteBanner"
    "siteNavigation siteNavigation"
    "pageContent pageContent";
}
.siteNavigation {
  grid-area: siteNavigation;
}
.siteLogo {
  margin-right: 0;
  margin-left: auto;
  grid-area: siteLogo;
}
.siteBanner {
  grid-area: siteBanner;
}
.pageContent {
  grid-area: pageContent;
}
`;

const PageHeader: React.FC<PageHeaderProps> = ({ layout }) => {
  let headerClass: string = "header";
  switch (layout) {
    case "desktop":
      headerClass = "desktopHeader";
      return (
        <DesktopHeader>
          <Logo className="Logo" key="Logo" />
          <Banner className="siteBanner" key="siteBanner" />
          <SelfPortrait className="selfPortrait" key="selfPortrait" />
          {/* <SiteNavigation menuItems choosePage={choosePage} /> */}
        </DesktopHeader>
      );
    case "mobile":
      headerClass = "mobileHeader";
      break;
  }
  return (
    <div
      className={headerClass}
      // style ={}
    >
      <Logo className="Logo" refKey="Logo" />
      <Banner className="siteBanner" refKey="siteBanner" />
      <SelfPortrait className="selfPortrait" refKey="selfPortrait" />
      {/* <SiteNavigation menuItems choosePage={choosePage} /> */}
    </div>
  );
};
export default PageHeader;
