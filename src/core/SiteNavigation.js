import React from "react";
// import "./SiteNavigation.scss"

class SiteNavigation extends React.Component {
    constructor(props) {
        super(props)
        this.choosePage = props.choosePage
        this.state = {
            menueItems: props.menueItems,
        }
    }
    renderNavigationBar(DataStructure) {
        const css_margin = "1fr"
        /* need a good data structure for this so menue items can
            1) have children
            2) have internal AND external names
            3) Have cascading children
        */

        /*
            shortcut solution =>
                DataStructure = [[publicName,InternalName],[P,I],...]
        */
        let navigationBarItems = []
        let css_grid_template_areas = "\n\"."
        let css_grid_template_columns = css_margin
        for (let menueReference of DataStructure) {
            let [publicName, internalRefrence] = menueReference
            css_grid_template_areas += ` ${internalRefrence}`
            css_grid_template_columns += " auto"
            navigationBarItems.push(
                <button
                    onClick={() =>
                        // console.log(internalRefrence)

                        this.choosePage(internalRefrence)
                    }
                    key={internalRefrence}
                    className={internalRefrence}
                    style={{
                        "grid-area": internalRefrence
                    }}
                >
                    {publicName}
                </button >
            )
        }
        css_grid_template_areas += " .\""
        css_grid_template_columns += ` ${css_margin}`
        console.log(css_grid_template_areas)
        console.log(css_grid_template_columns)
        return <div
            className="navigationBar"
            style={{
                display: "grid",
                "grid-template-areas": css_grid_template_areas,
                "grid-template-columns": css_grid_template_columns
            }}
        >
            {navigationBarItems}
        </div>
    }
    renderSubMenue(SubDataStructure) {
        let subMenueItems = [];
        return <div>{subMenueItems}</div>
    }
    render() {
        return <div>
            {this.renderNavigationBar(this.state.menueItems)}
        </div>
    }
}

export default SiteNavigation