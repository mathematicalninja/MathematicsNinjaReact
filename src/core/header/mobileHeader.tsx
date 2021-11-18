import React from "react";

interface mobileHeaderProps {}

const mobileHeaderStyle: React.CSSProperties = {
  margin: 0,
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridTemplateRows: "auto auto auto",
  gridTemplateAreas: `
  "siteLogo siteBanner"
  "siteNavigation siteNavigation"
  "pageContent pageContent"
`,
};

const MobileHeader: React.FC<mobileHeaderProps> = (props) => {
  return (
    <div
      className="mobileHeader"
      key="mobileHeader"
      style={mobileHeaderStyle}
      //
    >
      {props.children}
      {
        // <Logo className="Logo" key="Logo" />
        // <Banner className="siteBanner" key="siteBanner" />
        // <SelfPortrait className="selfPortrait" key="selfPortrait" />
        // <SiteNavigation menuItems choosePage={choosePage} />
      }
    </div>
  );
};
export default MobileHeader;
