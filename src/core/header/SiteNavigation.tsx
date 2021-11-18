// import "./SiteNavigation.scss"

import React from "react";

interface MenuDataStructure {}

interface SiteNavigationProps {
  choosePage: (pageRef: string) => void;
  menuItems: MenuDataStructure;
}

const SiteNavigation: React.FC<SiteNavigationProps> = ({
  choosePage,
  menuItems,
}: SiteNavigationProps) => {
  return <div className="siteNavigation" key="siteNavigation"></div>;
};
export default SiteNavigation;

// class SiteNavigation extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.choosePage = (ref) => props.choosePage(ref)

//     this.state = {
//       menuItems: props.menuItems,
//     };
//   }
//   renderNavigationBar(DataStructure) {
//     const css_margin = "0";
//     /* need a good data structure for this so menue items can
//             1) have children
//             2) have internal AND external names
//             3) Have cascading children
//         */

//     /*
//             shortcut solution =>
//                 DataStructure = [[publicName,InternalName],[P,I],...]
//         */
//     let navigationBarItems: JSX.Element[] = [];
//     let css_grid_template_areas = '\n".';
//     let css_grid_template_columns = css_margin;
//     for (let menueReference of DataStructure) {
//       let [publicName, internalRefrence] = menueReference;
//       css_grid_template_areas += ` ${internalRefrence}`;
//       css_grid_template_columns += " auto";
//       navigationBarItems.push(
//         <button
//           // onClick={() => this.choosePage(internalRefrence)}
//           key={internalRefrence}
//           className={internalRefrence}
//           // theme:{branding}  Here
//           style={{
//             gridArea: internalRefrence,
//             color: "var(--Grey-0)",
//             backgroundColor: "var(--Secondary-4)",
//             border: "0px none",
//             margin: "1px",
//             fontSize: "large",

//             // the stuff below looks naff
//             // "WebkitTextFillColor": "var(--Secondary-0)",
//             // "WebkitTextStrokeWidth": "0.5px",
//             // "WebkitTextStrokeColor": "var(--Primary-0)",
//           }}
//         >
//           {publicName}
//         </button>,
//       );
//     }
//     css_grid_template_areas += ' ."';
//     css_grid_template_columns += ` ${css_margin}`;
//     return (
//       <div
//         className="navigationBar"
//         style={{
//           display: "grid",
//           gridTemplateAreas: css_grid_template_areas,
//           gridTemplateColumns: css_grid_template_columns,
//           // "marginBottom": "0.2vw",
//           borderBottom: "5px solid var(--Secondary-0)",
//           // "boxShadow":
//           //     " var(--Secondary-6) 0 0 0 5px",
//           backgroundColor: "var(--Grey-0)",
//         }}
//       >
//         {navigationBarItems}
//       </div>
//     );
//   }
//   renderSubMenue(SubDataStructure) {
//     let submenuItems = [];
//     return <div>{submenuItems}</div>;
//   }
//   render() {
//     return (
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr auto 1fr",
//           gridTemplateAreas: ". navigationBar .",
//         }}
//       >
//         <div />
//         {/* {this.renderNavigationBar(this.state.menuItems)} */}
//         {this.renderNavigationBar([
//           ["test 3", "test3"],
//           ["test  4", "test4"],
//           ["test", "test"],
//           ["test 2", "test 2"],
//         ])}
//         <div />
//       </div>
//     );
//   }
// }

// export default SiteNavigation;
