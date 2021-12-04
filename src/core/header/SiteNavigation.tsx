// import "./SiteNavigation.scss"

import React from "react";
import { menuItemsInterface } from "./menuItems";
import menuItems from "./menuItems";
import Link from "next/link";

export interface SiteNavigationProps {
  // choosePage: (pageRef: string) => void;
  // menuItems: MenuDataStructure;
}

class SiteNavigation extends React.Component {
  constructor(props) {
    super(props);
    // this.choosePage = (ref) => props.choosePage(ref)

    this.state = {
      menuItems: props.menuItems,
    };
  }
  renderNavigationBar(DataStructure: menuItemsInterface) {
    const css_margin = "50";
    /* need a good data structure for this so menue items can
            1) have children
            2) have internal AND external names
            3) Have cascading children
        */

    /*
            shortcut solution =>
                DataStructure = [[publicName,InternalName],[P,I],...]
        */
    let navigationBarItems: JSX.Element[] = [];
    let css_grid_template_areas = '\n"';
    let css_grid_template_columns = css_margin;
    for (let menuReference of DataStructure) {
      let publicName = menuReference.text;
      let internalReference = menuReference.uri;
      css_grid_template_areas += ` ${publicName}`;
      css_grid_template_columns += " auto";
      navigationBarItems.push(
        <button
          // onClick={() => this.choosePage(internalRefrence)}
          key={publicName}
          className={publicName}
          // theme:{branding}  Here
          style={{
            gridArea: publicName,
            color: "var(--Grey-0)",
            backgroundColor: "var(--Secondary-4)",
            border: "0px none",
            margin: "1px",
            fontSize: "large",

            // the stuff below looks naff
            // "WebkitTextFillColor": "var(--Secondary-0)",
            // "WebkitTextStrokeWidth": "0.5px",
            // "WebkitTextStrokeColor": "var(--Primary-0)",
          }}
        >
          {/* {publicName} */}
          <Link href={internalReference}>{publicName}</Link>,
        </button>,
      );
    }
    css_grid_template_areas += ' "';
    css_grid_template_columns += ` ${css_margin}`;
    return (
      <div
        className="navigationBar"
        style={{
          display: "grid",
          gridTemplateAreas: css_grid_template_areas,
          gridTemplateColumns: css_grid_template_columns,
          // "marginBottom": "0.2vw",
          borderBottom: "5px solid var(--Secondary-0)",
          // "boxShadow":
          //     " var(--Secondary-6) 0 0 0 5px",
          backgroundColor: "var(--Grey-0)",
        }}
      >
        {navigationBarItems}
      </div>
    );
  }
  renderSubMenue(SubDataStructure) {
    let submenuItems = [];
    return <div>{submenuItems}</div>;
  }
  render() {
    return (
      <div
        style={
          {
            // display: "grid",
            // gridTemplateColumns: "1fr auto 1fr",
            // gridTemplateAreas: ". navigationBar .",
          }
        }
      >
        {this.renderNavigationBar(menuItems)}
      </div>
    );
  }
}

export default SiteNavigation;
