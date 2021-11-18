import React from "react";

interface desktopHeaderProps {}

const desktopHeaderStyle: React.CSSProperties = {
  margin: 0,
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto auto",
  gridTemplateAreas: `
  "siteLogo siteBanner"
  "siteNavigation siteNavigation siteNavigation"
`,
};

const DesktopHeader: React.FC<desktopHeaderProps> = (props) => {
  return (
    <div
      className="desktopHeader"
      key="desktopHeader"
      style={desktopHeaderStyle}
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
export default DesktopHeader;
