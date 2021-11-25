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
const PageHeader: React.FC<PageHeaderProps> = ({ layout }) => {
  let headerClass: string = "header";
  switch (layout) {
    case "desktop":
      // headerClass = "desktopHeader";
      return <DesktopHeader height={10} units="vw" />;
    case "mobile":
      headerClass = "mobileHeader";
      return <></>;
  }
};
export default PageHeader;
