import React from "react";
import Banner, { BannerProps } from "./banner";
import Logo, { logoProps } from "./logo";
import SelfPortrait, { SelfPortraitProps } from "../assets/SelfPortrait";
import SiteNavigation, {
  SiteNavigationProps,
} from "../components/SiteNavigation";

import { getDesktopProps } from "../utils/getDesktopProps";

export interface desktopHeaderProps {
  height?: number;
  width?: number;
  units?: string;
}

const DesktopHeader: React.FC<desktopHeaderProps> = (props) => {
  const sizes = getDesktopProps(props);

  const LogoInputs: logoProps = {
    className: "Logo",
    refKey: "Logo",

    sizes: sizes,
  };

  const BannerInputs: BannerProps = {
    className: "siteBanner",
    refKey: "siteBanner",

    sizes: sizes,
  };

  const PortraitInput: SelfPortraitProps = {
    className: "selfPortrait",
    refKey: "selfPortrait",

    sizes: sizes,
  };

  const NavigationInput: SiteNavigationProps = {
    // Unnecessary?
  };

  // const GTC = `${sizes.outerMargin} ${sizes.bannerHeight} ${sizes.textBannerWidth} ${sizes.halfHeight} ${sizes.outerMargin}`;
  // const GTC = `${sizes.outerMargin} ${sizes.bannerHeight} ${sizes.textBannerWidth} ${sizes.bannerHeight} ${sizes.outerMargin}`;
  const GTC = `auto ${sizes.bannerHeight} ${sizes.textBannerWidth} ${sizes.bannerHeight} auto`;

  const desktopHeaderStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: GTC,
  };

  return (
    <div
      className="desktopHeader"
      key="desktopHeader"
      style={desktopHeaderStyle}
      //
    >
      <div />
      <Logo {...LogoInputs} />
      <Banner {...BannerInputs} />
      <SelfPortrait {...PortraitInput} />
      <div />
      <div />
      <div />
      <SiteNavigation {...NavigationInput} />

      {/* <SiteNavigation menuItems choosePage={choosePage} /> */}
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
